import React from "react";
import ResearchCard from "./ResearchCard";
import BotIcon from "./product-icons/BotIcon";
import HexologyIcon from "./product-icons/HexologyIcon";
import LatticeIcon from "./product-icons/LatticeIcon";
import MysteryIcon from "./product-icons/MysteryIcon";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-white tracking-tight">
          Products
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <ResearchCard
            title="?"
            description="Coming Soon"
            icon={<MysteryIcon />}
          />

          <ResearchCard
            title="Bot"
            description="An online Companion that works with you in multiple platforms (0.4 version is done)"
            href="https://github.com/Zwin-ux/botbot/tree/main"
            icon={<BotIcon />}
          />

          <ResearchCard
            title="Hexology"
            description="An online Platform to play Hex"
            href="https://hexology.me/"
            icon={<HexologyIcon />}
          />

          <ResearchCard
            title="Lattice"
            description="MMO browser-based stock market simulator game (In Development)"
            icon={<LatticeIcon />}
          />
        </div>
      </div>
    </section>
  );
}
