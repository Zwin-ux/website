"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import DraggableCard from "./DraggableCard";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";
import { computeInitialPositions, type CardPosition } from "../lib/canvasLayout";

const STORAGE_KEY = "project-canvas-positions";
const MIN_ZOOM = 0.4;
const MAX_ZOOM = 1.5;

interface ProjectCanvasProps {
  projects: Project[];
}

function loadPositions(count: number): CardPosition[] {
  if (typeof window === "undefined") return computeInitialPositions(count);
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as CardPosition[];
      if (parsed.length === count) return parsed;
    }
  } catch {}
  return computeInitialPositions(count);
}

function savePositions(positions: CardPosition[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {}
}

export default function ProjectCanvas({ projects }: ProjectCanvasProps) {
  const [positions, setPositions] = useState<CardPosition[]>(() =>
    computeInitialPositions(projects.length)
  );
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0 });
  const panOrigin = useRef({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);

  // Hydrate positions from sessionStorage after mount
  useEffect(() => {
    setPositions(loadPositions(projects.length));
    setHydrated(true);
  }, [projects.length]);

  // Mobile check
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Persist positions
  useEffect(() => {
    if (hydrated) savePositions(positions);
  }, [positions, hydrated]);

  const handleCardDragEnd = useCallback((index: number, x: number, y: number) => {
    setPositions((prev) => {
      const next = [...prev];
      next[index] = { x, y };
      return next;
    });
  }, []);

  const resetLayout = useCallback(() => {
    const initial = computeInitialPositions(projects.length);
    setPositions(initial);
    setPan({ x: 0, y: 0 });
    setZoom(1);
  }, [projects.length]);

  // Canvas panning via pointer events on background
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      // Only pan when clicking directly on the viewport background
      if (e.target !== e.currentTarget) return;
      isPanning.current = true;
      panStart.current = { x: e.clientX, y: e.clientY };
      panOrigin.current = { ...pan };
      (e.target as HTMLDivElement).setPointerCapture(e.pointerId);
    },
    [pan]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isPanning.current) return;
      const dx = e.clientX - panStart.current.x;
      const dy = e.clientY - panStart.current.y;
      setPan({
        x: panOrigin.current.x + dx,
        y: panOrigin.current.y + dy,
      });
    },
    []
  );

  const handlePointerUp = useCallback(() => {
    isPanning.current = false;
  }, []);

  // Scroll-wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setZoom((prev) => {
      const delta = e.deltaY * -0.001;
      return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prev + delta));
    });
  }, []);

  // Mobile fallback: simple grid
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Reset button */}
      <div className="flex justify-end mb-3">
        <button
          onClick={resetLayout}
          className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors px-3 py-1.5 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50"
        >
          Reset layout
        </button>
      </div>

      {/* Viewport */}
      <div
        ref={viewportRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        className="relative h-[700px] overflow-hidden rounded-2xl border border-zinc-800/60 bg-zinc-950 cursor-grab active:cursor-grabbing"
        style={{
          // Dot-grid background
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Zoom hint */}
        <div className="absolute top-3 right-3 z-20 text-[10px] text-zinc-600 font-mono select-none pointer-events-none">
          {Math.round(zoom * 100)}%
        </div>

        {/* Canvas layer */}
        <motion.div
          style={{
            x: pan.x,
            y: pan.y,
            scale: zoom,
            transformOrigin: "0 0",
          }}
          className="absolute inset-0"
        >
          {hydrated &&
            projects.map((project, i) => (
              <DraggableCard
                key={project.slug}
                project={project}
                x={positions[i].x}
                y={positions[i].y}
                onDragEnd={(nx, ny) => handleCardDragEnd(i, nx, ny)}
              />
            ))}
        </motion.div>
      </div>
    </div>
  );
}
