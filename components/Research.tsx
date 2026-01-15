"use client";

import React from "react";
import { motion } from "framer-motion";
import ResearchCard from "./ResearchCard";
import QuantumIcon from "./research-icons/QuantumIcon";
import PvsNPIcon from "./research-icons/PvsNPIcon";
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
            Pushing the boundaries of computation, logic, and mathematical modeling to define the next era of digital culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResearchCard
            title="Quantum Logic"
            description="Exploring non-classical logic gates and their applications in distributed systems."
            icon={<QuantumIcon />}
          />
          <ResearchCard
            title="P vs NP Theory"
            description="Investigating heuristic approaches to complexity classes in real-world scenarios."
            icon={<PvsNPIcon />}
          />
          <ResearchCard
            title="Incompleteness"
            description="Analyzing the limits of formal systems in the context of digital governance."
            icon={<GodelIcon />}
          />
          <ResearchCard
            title="Modeling"
            description="Synthesizing digital identity through technical and mathematical frameworks."
            icon={<ParabolaIcon />}
          />
          <ResearchCard
            title="Visual Systems"
            description="Researching real-time video processing and spatial awareness primitives."
            icon={<FunnyCamIcon />}
          />
          <ResearchCard
            title="Logic Systems"
            description="Formal verification of software architectures for high-reliability environments."
            icon={<GodelIcon />}
          />
        </div>
      </div>
    </section>
  );
}
