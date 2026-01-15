"use client";

import React from "react";
import { motion } from "framer-motion";

interface ResearchCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

export default function ResearchCard({
  title,
  description,
  icon,
  href,
  className = "",
}: ResearchCardProps) {
  const CardContent = (
    <div className={`group relative p-8 h-full bg-black border border-white/10 hover:border-retro-blue/50 transition-all ${className}`}>
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-retro-blue" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-retro-blue" />
      
      <div className="flex flex-col gap-6">
        <div className="w-10 h-10 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-2 group-hover:text-retro-blue transition-colors">
            {title}
          </h3>
          <p className="text-zinc-500 font-mono text-[10px] leading-relaxed uppercase tracking-widest group-hover:text-zinc-400 transition-colors">
            {description}
          </p>
        </div>
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
