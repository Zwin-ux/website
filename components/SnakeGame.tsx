"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';

type GameState = 'waiting' | 'ready' | 'go' | 'finished';

const colors = [
  'bg-blue-500', 'bg-cyan-500', 'bg-indigo-500', 'bg-sky-500',
  'bg-emerald-500', 'bg-teal-500', 'bg-violet-500', 'bg-rose-500'
];

const emojis = ['🚀', '⚡', '🔥', '💎', '🌟', '🎯', '💫', '🎉'];

export default function ReactionGame() {
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentEmoji, setCurrentEmoji] = useState(emojis[0]);
  const [round, setRound] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [goofyMode, setGoofyMode] = useState(true);
  const [bursts, setBursts] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);
  const [mascot, setMascot] = useState('😸');
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const startTimeRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const burstIdRef = useRef(0);

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

  // Tiny synth beeps using WebAudio (no assets)
  const playBeep = useCallback((type: 'start' | 'success' | 'fail') => {
    if (!soundEnabled || typeof window === 'undefined') return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);
    const now = ctx.currentTime;
    const conf = {
      start: { f: 520, d: 0.08 },
      success: { f: 880, d: 0.12 },
      fail: { f: 220, d: 0.18 },
    }[type];
    o.frequency.setValueAtTime(conf.f, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.3, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + conf.d);
    o.start(now);
    o.stop(now + conf.d + 0.01);
  }, [soundEnabled]);

  const resetGame = () => {
    setGameState('waiting');
    setScore(0);
    setReactionTime(null);
    setRound(0);
    setTotalTime(0);
    setMascot('😸');
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const startRound = () => {
    setGameState('ready');
    setCurrentColor(getRandomColor());
    setCurrentEmoji(getRandomEmoji());
    setMascot('🫨');
    
    // Much shorter random delay - gets faster each round!
    const baseDelay = Math.max(500, 2000 - (round * 150)); // Starts at 2s, gets down to 500ms
    const randomVariation = Math.random() * 1000; // 0-1s variation
    const delay = baseDelay + randomVariation;
    
    timeoutRef.current = setTimeout(() => {
      setGameState('go');
      startTimeRef.current = performance.now();
      setMascot('🤩');
      playBeep('start');
    }, delay);
  };

  const handleClick = () => {
    if (gameState === 'ready') {
      // Too early!
      setGameState('finished');
      setReactionTime(-1);
      setMascot('😿');
      playBeep('fail');
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    } else if (gameState === 'go') {
      // Perfect timing!
      const endTime = performance.now();
      const reaction = endTime - startTimeRef.current;
      setReactionTime(reaction);
      
      // Scoring system with bonuses for speed and streaks
      let points = Math.max(2000 - Math.floor(reaction * 2), 50);
      
      // Speed bonuses
      if (reaction < 200) points += 500; // Lightning fast bonus
      if (reaction < 300) points += 200; // Very fast bonus
      if (reaction < 400) points += 100; // Fast bonus
      
      // Streak bonus (more points for consecutive rounds)
      points += round * 50;
      
      const newScore = score + points;
      setScore(newScore);
      setTotalTime(totalTime + reaction);
      
      // Mascot reacts to speed
      setMascot(reaction < 200 ? '😻' : reaction < 320 ? '😸' : '🙂');
      playBeep('success');

      // Goofy emoji bursts
      if (goofyMode) {
        const centerX = 0; // relative to container
        const centerY = 0;
        const burstItems = Array.from({ length: 8 }, () => ({
          id: ++burstIdRef.current,
          x: (Math.random() - 0.5) * 160, // -80..80
          y: (Math.random() - 0.5) * 160, // -80..80
          emoji: getRandomEmoji(),
        }));
        setBursts((prev) => [...prev, ...burstItems]);
        // Clean up after a short time
        setTimeout(() => {
          setBursts((prev) => prev.filter(b => !burstItems.some(x => x.id === b.id)));
        }, 800);
      }

      const newRound = round + 1;
      setRound(newRound);
      
      if (newRound >= 10) { // Increased to 10 rounds!
        setGameState('finished');
        if (newScore > bestScore) {
          setBestScore(newScore);
          try { localStorage.setItem('reaction_best', String(newScore)); } catch {}
        }
      } else {
        // Much faster next round - barely any pause!
        setTimeout(() => {
          startRound();
        }, 600); // Reduced from 1500ms to 600ms
      }
    } else if (gameState === 'waiting') {
      startRound();
    }
  };

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Space' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  }, [gameState, score, round, totalTime]);

  useEffect(() => {
    const gameArea = gameAreaRef.current;
    if (gameArea) {
      gameArea.addEventListener('keydown', handleKeyPress);
      gameArea.focus();
      return () => gameArea.removeEventListener('keydown', handleKeyPress);
    }
  }, [handleKeyPress]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Load best score from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('reaction_best');
      if (stored) setBestScore(Number(stored));
    } catch {}
  }, []);

  return (
    <div className="bg-zinc-900 py-16 px-4">
      <div 
        ref={gameAreaRef}
        className="max-w-4xl mx-auto text-center outline-none"
        tabIndex={0}
        onClick={handleClick}
      >
        <h2 className="text-3xl font-bold text-white mb-2">
          <span className="text-blue-400">🎉</span> Bonelli Buddy Reaction Party
        </h2>
        <div className="mb-6 flex items-center justify-center gap-3 text-zinc-300">
          <span className="text-2xl">{mascot}</span>
          <button
            onClick={(e) => { e.stopPropagation(); setSoundEnabled(s => !s); }}
            className={`px-3 py-1 rounded-lg text-sm border ${soundEnabled ? 'bg-blue-600 text-white border-blue-500' : 'bg-zinc-800 border-zinc-700 text-zinc-300'}`}
          >
            {soundEnabled ? 'Sound: On' : 'Sound: Off'}
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setGoofyMode(g => !g); }}
            className={`px-3 py-1 rounded-lg text-sm border ${goofyMode ? 'bg-pink-600 text-white border-pink-500' : 'bg-zinc-800 border-zinc-700 text-zinc-300'}`}
          >
            {goofyMode ? 'Goofy Mode: On' : 'Goofy Mode: Off'}
          </button>
        </div>
        
        <div className="mb-6 space-y-4">
          <div className="flex justify-center space-x-8 text-white">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{score}</div>
              <div className="text-sm text-zinc-400">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">{bestScore}</div>
              <div className="text-sm text-zinc-400">Best</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">{round}/10</div>
              <div className="text-sm text-zinc-400">Round</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-8 relative">
          <div 
            className={`
              w-80 h-80 rounded-2xl border-4 flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg
              ${gameState === 'waiting' ? 'bg-zinc-800 border-blue-500/50 hover:border-blue-400' : ''}
              ${gameState === 'ready' ? 'bg-red-600 border-red-400 animate-pulse shadow-red-500/30' : ''}
              ${gameState === 'go' ? `${currentColor} border-white shadow-2xl scale-110` : ''}
              ${gameState === 'finished' ? 'bg-zinc-800 border-zinc-600' : ''}
            `}
            onClick={handleClick}
          >
            <div className="text-center">
              {gameState === 'waiting' && (
                <div className="animate-pulse">
                  <div className="text-6xl mb-4">🎯</div>
                  <div className="text-white text-xl font-bold">Click to Start!</div>
                  <div className="text-blue-400 text-sm mt-2">Test your reflexes</div>
                </div>
              )}
              
              {gameState === 'ready' && (
                <div>
                  <div className="text-6xl mb-4 animate-bounce">⏳</div>
                  <div className="text-white text-xl font-bold">Get Ready...</div>
                  <div className="text-red-200 text-sm animate-pulse">Wait for it...</div>
                </div>
              )}
              
              {gameState === 'go' && (
                <div>
                  <div className="text-8xl mb-4 animate-spin">{currentEmoji}</div>
                  <div className="text-white text-2xl font-bold animate-pulse">CLICK NOW!</div>
                </div>
              )}
              
              {gameState === 'finished' && (
                <div>
                  {reactionTime === -1 ? (
                    <div>
                      <div className="text-6xl mb-4">😅</div>
                      <div className="text-red-400 text-xl font-bold">Too Early!</div>
                      <div className="text-zinc-400 text-sm">Wait for the signal</div>
                    </div>
                  ) : (
                    <div>
                      <div className="text-6xl mb-4 animate-bounce">🏆</div>
                      <div className="text-blue-400 text-xl font-bold">Game Complete!</div>
                      <div className="text-white text-lg">Final Score: <span className="text-cyan-400 font-bold">{score}</span></div>
                      {round >= 10 && (
                        <div className="text-zinc-400 text-sm mt-2">
                          Avg: <span className="text-blue-300">{Math.round(totalTime / 10)}ms</span>
                        </div>
                      )}
                      <div className="text-blue-300 text-sm mt-1 font-semibold">
                        {score > 15000 ? '🔥 INSANE!' : score > 12000 ? '⚡ AMAZING!' : score > 8000 ? '💎 GREAT!' : '🎯 NICE!'}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Goofy emoji bursts */}
          {goofyMode && bursts.length > 0 && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {bursts.map(b => (
                <div
                  key={b.id}
                  className="absolute text-2xl md:text-3xl select-none"
                  style={{ transform: `translate(${b.x}px, ${b.y}px)` }}
                >
                  <span className="inline-block animate-bounce" style={{ animationDuration: `${400 + Math.random()*300}ms` }}>{b.emoji}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {reactionTime !== null && reactionTime > 0 && gameState !== 'finished' && (
          <div className="mb-4">
            <div className={`text-xl font-bold ${
              reactionTime < 200 ? 'text-cyan-400' : 
              reactionTime < 300 ? 'text-blue-400' : 
              reactionTime < 400 ? 'text-sky-400' : 'text-zinc-400'
            }`}>
              {Math.round(reactionTime)}ms
              {reactionTime < 200 && ' ⚡'}
              {reactionTime < 300 && reactionTime >= 200 && ' 🔥'}
            </div>
            <div className="text-zinc-400 text-sm">
              +{Math.max(2000 - Math.floor(reactionTime * 2), 50) + (round * 50) + 
                (reactionTime < 200 ? 500 : reactionTime < 300 ? 200 : reactionTime < 400 ? 100 : 0)} points
            </div>
          </div>
        )}

        {gameState === 'finished' && (
          <button
            onClick={resetGame}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Play Again
          </button>
        )}

        <div className="mt-8 text-zinc-400 text-sm space-y-1">
          <div className="md:hidden">Tap when the color changes!</div>
          <div className="hidden md:block">Click or press SPACE when the color changes!</div>
          <div>10 rounds • gets faster • silly sound beeps • goofy emoji bursts</div>
          <div className="text-xs mt-1 text-blue-300">
            &lt;200ms: <span className="text-cyan-400">⚡+500</span> • &lt;300ms: <span className="text-blue-400">🔥+200</span> • &lt;400ms: <span className="text-sky-400">💨+100</span> • Streak: <span className="text-blue-300">+{round * 50}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
