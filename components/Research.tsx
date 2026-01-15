"use client";

import React from "react";
import { motion } from "framer-motion";
import ResearchCard from "./ResearchCard";
import PvsNPIcon from "./research-icons/PvsNPIcon";
import GodelIcon from "./research-icons/GodelIcon";
import ParabolaIcon from "./research-icons/ParabolaIcon";
import QuantumIcon from "./research-icons/QuantumIcon";
import FunnyCamIcon from "./research-icons/FunnyCamIcon";

export default function Research() {
  return (
    <section id="research" className="relative py-24 md:py-32 bg-[#0A0B0E] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/40 text-sm font-medium tracking-[0.2em] uppercase"
          >
            Technical Exploration
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Research & Theory
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Pushing the boundaries of computation, logic, and mathematical modeling 
            to define the next era of digital culture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <ResearchCard
            title="Parabola"
            description="A research initiative exploring mathematical modeling and data visualization through parabolic functions and geometric analysis."
            href="https://parabola-sand.vercel.app/"
            icon={<ParabolaIcon />}
          />

          <ResearchCard
            title="Gödel's Mirror"
            description="An interactive exploration of formal logic and incompleteness through reflective prompt-based constructions."
            href="https://zwin-ux.github.io/godel/"
            icon={<GodelIcon />}
          />

          <ResearchCard
            title="Quantum Signals"
            description="Exploring quantum computing principles and their practical applications in signal processing."
            href="https://quantum-five-topaz.vercel.app/"
            icon={<QuantumIcon />}
          />

          <ResearchCard
            title="Theorem Proving"
            description="An accessible exploration of one of computer science's most fundamental questions: P vs NP."
            href="https://zwin-ux.github.io/P-V-NP/"
            icon={<PvsNPIcon />}
          />

          <div className="md:col-span-2">
            <ResearchCard
              title="Funny Cam"
              description="An experimental image classification project using TensorFlow to identify objects with a humorous twist, exploring the boundaries of AI-driven creative expression."
              href="https://quick-jw3c.onrender.com/"
              icon={<FunnyCamIcon />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
