import React from "react";
import ResearchCard from "./ResearchCard";
import PvsNPIcon from "./research-icons/PvsNPIcon";
import GodelIcon from "./research-icons/GodelIcon";
import ParabolaIcon from "./research-icons/ParabolaIcon";
import QuantumIcon from "./research-icons/QuantumIcon";
import FunnyCamIcon from "./research-icons/FunnyCamIcon";

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Casual site definition shown above the Research heading */}
        <p className="text-center text-sm md:text-base text-white/90 mb-6">
          Technology as a collaborative medium
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-white tracking-tight">
          Research
        </h2>

        {/* Changed from space-y-6 to a grid to save vertical space and look more like a collection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
            description="Exploring quantum computing principles and their practical applications."
            href="https://quantum-five-topaz.vercel.app/"
            icon={<QuantumIcon />}
          />

          <ResearchCard
            title="Theorem Proving"
            description="An accessible exploration of one of computer science's most fundamental questions: P vs NP."
            href="https://zwin-ux.github.io/P-V-NP/"
            icon={<PvsNPIcon />}
          />

          <ResearchCard
            title="Funny Cam"
            description="An experimental image classification project using TensorFlow to identify objects with a humorous twist."
            href="https://quick-jw3c.onrender.com/"
            icon={<FunnyCamIcon />}
          />
        </div>
      </div>
    </section>
  );
}
