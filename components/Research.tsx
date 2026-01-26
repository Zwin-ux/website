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
            RESEARCH
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter">
            Technical Exploration
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-500 font-mono text-xs uppercase tracking-widest leading-relaxed">
            An R&D lab dedicated to experimental research and the freedom to play. We champion <span className="text-zinc-300">positive open source</span>—building, teaching, and sharing new concepts with the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResearchCard
            title="PARABOLIC ENV_01"
            tag="MATH_VIS"
            linkText="RUN_SIMULATION"
            description="Interactive environment for visualizing quadratic transformations on chaotic datasets. Features real-time parameter shifting."
            href="https://parabola-sand.vercel.app/"
            icon={<ParabolaIcon />}
          />
          <ResearchCard
            title="GÖDEL'S MIRROR"
            tag="LOGIC_LOOP"
            linkText="INIT_REFLECTION"
            description="Experimental interface demonstrating self-referential logic loops and incompleteness theorems via reflective prompting."
            href="https://zwin-ux.github.io/godel/"
            icon={<GodelIcon />}
          />
          <ResearchCard
            title="Q-SIGNAL PROC"
            tag="AUDIO_Q"
            linkText="SYNTHESIZE"
            description="Browser-based simulation of qubit superposition applied to digital signal processing frequencies."
            href="https://quantum-five-topaz.vercel.app/"
            icon={<QuantumIcon />}
          />
          <ResearchCard
            title="CV_DISTORTION"
            tag="GLSL_EXP"
            linkText="OPEN_LENS"
            description="Real-time GLSL pipeline experiments for facial mesh deformation and computer vision artifact generation."
            href="https://quick-jw3c.onrender.com/"
            icon={<FunnyCamIcon />}
          />
        </div>
      </div>
    </section>
  );
}
