"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("showcase");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center bg-black py-20 overflow-hidden">
      {/* Terminal Header Decoration */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-900 flex items-center px-4 gap-2 border-b border-white/10">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-green-500/50" />
        <div className="ml-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          SYSTEM_PORTAL // BONELLI.ALPHA_01
        </div>
      </div>

      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12 border border-white/10 p-4 bg-zinc-950/50 backdrop-blur-sm animate-float"
        >
          <Image
            src="/stylized-tree-logo.png"
            alt="Bonelli Logo"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32 object-contain grayscale invert opacity-60"
            priority
          />
        </motion.div>

        <div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase italic text-glow"
          >
            Investing in the <br /> 
            <span className="text-retro-blue drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Future of Culture</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-500 font-mono text-xs md:text-sm tracking-widest uppercase py-4"
          >
            [ BUILD ] [ INVEST ] [ REPEAT ]
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 mt-12 w-full max-w-md"
        >
          <button
            onClick={scrollToProjects}
            className="retro-button w-full text-sm group relative"
          >
            <span className="relative z-10">EXPLORE_SYSTEM</span>
          </button>
          <button
            onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full px-8 py-3 bg-transparent border border-white/20 text-white text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            RESEARCH_DIR
          </button>
        </motion.div>
      </div>

      {/* Decorative Matrix-style background numbers (Static/Subtle) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none font-mono text-[10px] leading-none overflow-hidden select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="whitespace-nowrap">
            {Array.from({ length: 50 }).map(() => Math.random() > 0.5 ? '1' : '0').join(' ')}
          </div>
        ))}
      </div>
    </section>
  );
}
