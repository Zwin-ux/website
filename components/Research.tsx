"use client";

import React from "react";
import { motion } from "framer-motion";
import ResearchCard from "./ResearchCard";
import QuantumIcon from "./research-icons/QuantumIcon";
import GodelIcon from "./research-icons/GodelIcon";
import ParabolaIcon from "./research-icons/ParabolaIcon";
import FunnyCamIcon from "./research-icons/FunnyCamIcon";

export default function Research() {
  return (
    <section id="research" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 border border-retro-blue/30 bg-retro-blue/5 text-retro-blue text-[10px] font-mono uppercase tracking-[0.3em]"
          >
            RESEARCH_DATABASE
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter">
            Technical Exploration
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 font-mono text-xs uppercase tracking-widest">
            We aim to start an R&D lab focused on teaching and expanding on new concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResearchCard
            title="Parabola"
            description="A research initiative exploring mathematical modeling and data visualization through parabolic functions."
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
            title="Funny Cam"
            description="Real-time browser-based computer vision experiments and distortion effects."
            href="https://quick-jw3c.onrender.com/"
            icon={<FunnyCamIcon />}
          />
        </div>
      </div>
    </section>
  );
}
