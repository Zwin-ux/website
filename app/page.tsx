"use client";

import { useEffect, useRef, useState } from "react";

type GameStatus = "ready" | "running" | "crashed";

export default function Home() {
  const gameRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<HTMLDivElement | null>(null);
  const obstacleRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const statusRef = useRef<GameStatus>("ready");
  const scoreRef = useRef(0);
  const [status, setStatus] = useState<GameStatus>("ready");
  const [score, setScore] = useState(0);

  const stateRef = useRef({
    playerY: 0,
    velocity: 0,
    obstacleX: 320,
    speed: 1.6,
    passed: false,
    last: 0,
    width: 520,
  });

  const flakes = useRef(
    Array.from({ length: 24 }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 6,
      size: 3 + Math.random() * 4,
      opacity: 0.35 + Math.random() * 0.4,
    }))
  );

  const applyPositions = () => {
    const playerEl = playerRef.current;
    const obstacleEl = obstacleRef.current;
    const state = stateRef.current;

    if (playerEl) {
      playerEl.style.bottom = `${14 + state.playerY}px`;
    }
    if (obstacleEl) {
      obstacleEl.style.left = `${state.obstacleX}px`;
    }
  };

  const resetGame = () => {
    const width = gameRef.current?.clientWidth ?? 520;
    const state = stateRef.current;
    state.width = width;
    state.playerY = 0;
    state.velocity = 0;
    state.obstacleX = width * 0.75;
    state.speed = 1.6;
    state.passed = false;
    statusRef.current = "ready";
    scoreRef.current = 0;
    setStatus("ready");
    setScore(0);
    applyPositions();
  };

  const jump = () => {
    const state = stateRef.current;
    if (state.playerY < 2) {
      state.velocity = 12.5;
    }
  };

  const loop = () => {
    const state = stateRef.current;
    if (statusRef.current !== "running") return;

    const now = performance.now();
    const delta = Math.min(1.5, (now - state.last) / 16.67); // clamp big frame jumps
    state.last = now;

    const gravity = -0.62;
    state.velocity += gravity * delta;
    if (state.velocity < -9.5) {
      state.velocity = -9.5;
    }
    state.playerY = Math.max(0, state.playerY + state.velocity * delta);
    if (state.playerY === 0 && state.velocity < 0) {
      state.velocity = 0;
    }

    state.obstacleX -= state.speed * 10 * delta;
    if (state.obstacleX < -32) {
      state.obstacleX = state.width + 220 + Math.random() * 240;
      state.passed = false;
    }

    const playerX = 68;
    const playerW = 38;
    const obstacleW = 16;
    const obstacleH = 16;
    const horizontalHit =
      state.obstacleX < playerX + playerW &&
      state.obstacleX + obstacleW > playerX;
    const verticalHit = state.playerY < 6;

    if (horizontalHit && verticalHit) {
      statusRef.current = "crashed";
      setStatus("crashed");
      return;
    }

    if (!state.passed && state.obstacleX + obstacleW < playerX) {
      state.passed = true;
      setScore((prev) => {
        const next = prev + 1;
        scoreRef.current = next;
        state.speed = 1.6 + Math.min(1, next * 0.05);
        return next;
      });
    }

    applyPositions();
    rafRef.current = requestAnimationFrame(loop);
  };

  const startRunIfNeeded = () => {
    if (statusRef.current === "running") {
      jump();
      return;
    }
    resetGame();
    statusRef.current = "running";
    setStatus("running");
    stateRef.current.last = performance.now();
    jump();
    rafRef.current = requestAnimationFrame(loop);
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "ArrowUp") {
      e.preventDefault();
      startRunIfNeeded();
    }
  };

  useEffect(() => {
    applyPositions();
    const handleResize = () => {
      stateRef.current.width = gameRef.current?.clientWidth ?? 520;
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKey);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statusLabel =
    status === "running"
      ? "Running - hop the gifts!"
      : status === "crashed"
      ? "Crashed - tap/click to retry"
      : "Ready - tap/click or press space to start";

  return (
    <>
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full border border-white/10 bg-zinc-900/70 backdrop-blur rounded-2xl p-8 md:p-10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <p className="text-xs tracking-[0.3em] text-white/60">
              404 - TEMPORARILY PAUSED
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Busy with other responsibilities
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              I am working and have to put this on pause for now. Please check
              back later.
            </p>
            <p className="text-emerald-300 text-xl font-bold tracking-widest uppercase">
              JAN 25th
            </p>
          </div>

          <div className="relative rounded-xl bg-gradient-to-b from-[#0f1519] via-[#101820] to-[#0c1216] border border-emerald-900/40 shadow-inner overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="h-2 bg-gradient-to-r from-red-500 via-amber-300 to-green-500 opacity-70 blur-[2px]" />
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-sm text-white/70">
              <span>{statusLabel}</span>
              <span className="font-semibold text-emerald-200">
                Score: {score}
              </span>
            </div>
            <div
              ref={gameRef}
              className="relative overflow-hidden rounded-b-xl border-t border-white/5"
              style={{ height: 220 }}
              onClick={startRunIfNeeded}
              onTouchStart={startRunIfNeeded}
              role="button"
              aria-label="Dino runner 404 game"
            >
              <div className="absolute inset-0 pointer-events-none">
                {flakes.current.map((flake, idx) => (
                  <span
                    key={idx}
                    className="snowflake absolute bg-white rounded-full"
                    style={{
                      left: `${flake.left}%`,
                      animationDelay: `${flake.delay}s`,
                      animationDuration: `${flake.duration}s`,
                      width: flake.size,
                      height: flake.size,
                      opacity: flake.opacity,
                    }}
                  />
                ))}
              </div>

              <div className="absolute left-0 right-0 bottom-10 h-px bg-white/10" />

              <div
                ref={playerRef}
                className="absolute left-12 w-10 h-9 rounded-md bg-white shadow-lg shadow-emerald-500/10"
                style={{ bottom: 14 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-zinc-200 rounded-md" />
                <div className="absolute w-2 h-2 bg-black/70 rounded-sm top-2 right-2" />
              </div>

              <div
                ref={obstacleRef}
                className="absolute bottom-2 w-5 h-6 bg-gradient-to-b from-amber-200 via-red-400 to-red-600 rounded-sm shadow-md shadow-red-500/40 border border-white/10"
                style={{ left: 320 }}
              >
                <div className="absolute inset-x-1 top-0 h-1.5 bg-red-700 rounded-sm" />
                <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/70 -translate-x-1/2" />
                <div className="absolute inset-x-1 bottom-2 h-1 bg-emerald-400/80 rounded-sm" />
              </div>

              {status !== "running" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/70 border border-white/10 rounded-full px-4 py-2 text-xs md:text-sm text-white/80">
                    Tap/click or press space to hop the gift boxes!
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="text-center text-sm text-white/60">
            Works on desktop (space / click) and mobile (tap anywhere).
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fall {
          0% {
            transform: translateY(-16px);
          }
          100% {
            transform: translateY(240px);
          }
        }
        .snowflake {
          animation: fall linear infinite;
        }
      `}</style>
    </>
  );
}
