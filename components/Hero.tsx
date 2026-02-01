"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            damping: 20, 
            stiffness: 100 
          }}
        >
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-foreground relative z-10 italic">
              Bonelli.<span className="text-accent underline decoration-clay-light decoration-8">Dev</span>
            </h1>
            {/* Playdoh Blob Backdrop for Title */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0, -2, 0],
                borderRadius: ["40% 60% 60% 40%", "50% 50% 50% 50%", "40% 60% 60% 40%"]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-white/[0.02] blur-xl z-0"
            />
          </div>
          <p className="text-zinc-400 max-w-xl text-xl md:text-2xl leading-relaxed font-medium">
            We build software to <span className="text-zinc-200">help others</span> and make products that <span className="text-zinc-200">matter.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
