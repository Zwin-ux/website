"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CreatorInvestment() {
  return (
    <section id="investment" className="relative py-24 md:py-32 bg-[#0A0B0E] overflow-hidden border-t border-white/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none">
              Invested in <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Creator Growth
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
          >
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
              <div className="text-3xl font-bold text-white">$700+</div>
              <p className="text-neutral-400 leading-relaxed font-light">
                Total capital deployed directly to fuel creator projects, infrastructure, and development. 
                We put our resources where our mouth is.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-4">
              <div className="text-3xl font-bold text-white">0% Ownership</div>
              <p className="text-neutral-400 leading-relaxed font-light">
                We take zero equity and zero ownership. Our only goal is to help creators scale 
                and maintain their independence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-10 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-2xl"
          >
            <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed italic">
              "We work with <span className="text-white font-medium">music artists</span>, 
              <span className="text-white font-medium"> server owners</span>, and 
              <span className="text-white font-medium"> digital creators</span> to build 
              the future of the creator economy."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
