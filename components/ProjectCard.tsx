"use client";

import React, { useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 100 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(1, springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    rotateX.set((y - centerY) / 8);
    rotateY.set((centerX - x) / 8);
  }

  function handleMouseEnter() {
    setIsHovered(true);
    scale.set(0.98);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        perspective: 1000,
      }}
      className="clay-material group relative p-6 transition-all duration-300 rounded-[2rem] border border-white/5"
    >
      {/* Organic "Stamp" Symbol on hover */}
      <motion.div
        className="pointer-events-none absolute w-32 h-32 bg-accent/20 rounded-full blur-3xl"
        style={{
          left: mouseX,
          top: mouseY,
          x: "-50%",
          y: "-50%",
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      <div className="flex items-start justify-between gap-3 mb-4">
        <a 
          href={project.live || project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/title z-10"
        >
          <h3 className="text-xl font-bold text-foreground group-hover/title:text-accent transition-colors flex items-center gap-2">
            {project.title}
            <motion.span
              animate={{ x: isHovered ? 3 : 0, opacity: isHovered ? 1 : 0.5 }}
              className="text-xs font-normal text-zinc-500"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.span>
          </h3>
        </a>
        <span className="shrink-0 text-[10px] px-3 py-1 rounded-full bg-black/40 text-zinc-400 font-mono tracking-tighter uppercase">
          {project.category}
        </span>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-6 relative z-10">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-8 relative z-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-zinc-500 font-medium border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm relative z-10">
        {project.live && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-accent text-black font-bold shadow-[0_4px_0_rgb(30,64,175)] hover:shadow-[0_2px_0_rgb(30,64,175)] hover:translate-y-[2px] transition-all"
          >
            Live Demo
          </motion.a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-200 transition-colors flex items-center gap-1 font-medium"
        >
          GitHub
          <span className="text-lg">→</span>
        </a>
      </div>

      {/* Abstract Clay Shape Background Accent */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/[0.02] rounded-full blur-2xl group-hover:bg-accent/[0.05] transition-colors duration-700" />
    </motion.div>
  );
}
