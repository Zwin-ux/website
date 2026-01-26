"use client";

import React from "react";
import { motion } from "framer-motion";

interface ResearchCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
  tag?: string;      // New: e.g. "EXP-01", "v1.0"
  linkText?: string; // New: Custom link text
}

export default function ResearchCard({
  title,
  description,
  icon,
  href,
  className = "",
  tag = "SPEC_V1",
  linkText = "ACCESS_DATA"
}: ResearchCardProps) {
  const CardContent = (
    <div className={`group relative p-8 h-full bg-black border border-white/10 hover:border-retro-blue/50 transition-all ${className}`}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-retro-blue" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-retro-blue" />
      
      {/* Tag/Spec ID */}
      <div className="absolute top-8 right-8 text-[9px] font-mono text-zinc-600 group-hover:text-retro-blue transition-colors">
        [{tag}]
      </div>

      <div className="flex flex-col h-full justify-between gap-6">
        <div>
          <div className="w-10 h-10 mb-6 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all text-retro-blue">
            {icon}
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 group-hover:text-retro-blue transition-colors font-mono">
            {title}
          </h3>
          <p className="text-zinc-500 font-mono text-[10px] leading-relaxed uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
            {description}
          </p>
        </div>
        
        {/* Unique Link Appearance */}
        {href && (
          <div className="pt-4 border-t border-white/5 flex items-center justify-between">
             <span className="text-[9px] font-mono text-retro-blue opacity-0 group-hover:opacity-100 transition-opacity">
                {">"} {linkText}
             </span>
             <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-retro-blue rounded-full transition-colors" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ x: 2 }}
        className="block h-full"
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="block h-full"
    >
      {CardContent}
    </motion.div>
  );
}
