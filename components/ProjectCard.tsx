"use client";

import React, { useState } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import type { Project } from "../data/projects";
import { SunnyIcon, HexologyIcon, FunnyCamIcon, ParabolaIcon, GodelIcon, DefaultIcon } from "./ProjectIcons";

interface ProjectCardProps {
  project: Project;
}

const Icons: Record<string, React.ElementType> = {
  sunny: SunnyIcon,
  hexology: HexologyIcon,
  "funny-cam": FunnyCamIcon,
  parabola: ParabolaIcon,
  godel: GodelIcon,
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // High-fidelity touch/mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    rotateX.set((y - centerY) / 20); // Subtle tick
    rotateY.set((centerX - x) / 20); // Subtle tick
  }

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }

  const Icon = Icons[project.slug] || DefaultIcon;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        perspective: 1000,
      }}
      className="group relative h-full flex flex-col justify-between p-8 rounded-[32px] bg-card border border-border/40 overflow-hidden"
    >
      {/* Dynamic backdrop glow based on mouse position */}
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.03), transparent 40%)`
        }}
      />
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col gap-6 h-full">
        {/* Header: Icon + Title */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
             <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-900 border border-border/50 text-foreground shadow-inner group-hover:scale-110 transition-transform duration-300 ease-out">
               {/* Icon Glow */}
               <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Icon className="w-6 h-6 z-10" />
             </div>
             <div>
               <h3 className="text-xl font-bold tracking-tight text-foreground">{project.title}</h3>
               <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{project.category}</span>
             </div>
          </div>
          
          {/* Arrow Indicator */}
           <motion.div 
             animate={{ x: isHovered ? 4 : 0, y: isHovered ? -4 : 0 }}
             className="text-zinc-600 group-hover:text-foreground transition-colors"
           >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
             </svg>
           </motion.div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed font-medium">
          {project.summary}
        </p>
        
        {/* Spacer to push tags/link to bottom */}
        <div className="flex-1" />

        {/* Footer: Tags + Link */}
        <div className="flex items-center justify-between pt-6 border-t border-border/30">
           <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] px-2 py-1 rounded-md bg-zinc-900 text-zinc-500 border border-zinc-800 font-mono uppercase tracking-wide">
                {tag}
              </span>
            ))}
           </div>
           
           {project.live ? (
             <a
               href={project.live}
               target="_blank"
               rel="noopener noreferrer"
               className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-black uppercase tracking-wide bg-foreground rounded-full hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
             >
               Live Demo
             </a>
           ) : (
            <a
               href={project.github}
               target="_blank"
               rel="noopener noreferrer"
               className="text-xs font-bold text-zinc-500 hover:text-foreground transition-colors uppercase tracking-wide"
             >
               View Code
             </a>
           )}
        </div>
      </div>
      
      {/* Click target wrapper for full card feeling */}
      <a 
         href={project.live || project.github} 
         target="_blank" 
         rel="noopener noreferrer"
         className="absolute inset-0 z-0"
         aria-label={`View ${project.title}`}
      />
    </motion.div>
  );
}
