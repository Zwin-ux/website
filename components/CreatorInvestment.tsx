"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CreatorInvestment() {
  return (
    <section id="investment" className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-block px-3 py-1 border border-retro-green/30 bg-retro-green/5 text-retro-green text-[10px] font-mono uppercase tracking-[0.3em]">
              INVESTMENT_LOG
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter">
              Creator Commitment
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black p-8 md:p-12 space-y-4"
            >
              <div className="text-4xl font-bold text-retro-green">$700+</div>
              <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest leading-relaxed">
                We provide the money to help ideas grow. We don't take credit. We just want to fuel the work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black p-8 md:p-12 space-y-4"
            >
              <div className="text-4xl font-bold text-retro-green">0% Ownership</div>
              <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest leading-relaxed">
                ZERO equity. ZERO oversight. We provide the fuel; you provide the vision.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-white/10 pl-8 py-4"
          >
            <p className="text-lg md:text-xl text-zinc-400 font-mono uppercase tracking-tight leading-relaxed italic">
              "Working with <span className="text-white">artists</span>, 
              <span className="text-white"> server architects</span>, and 
              <span className="text-white"> creators</span> to build the future."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
