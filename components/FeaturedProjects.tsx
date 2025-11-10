import React from "react";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-white tracking-tight">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Sunny - Alpha Release */}
          <a
            href="https://sunny-phi-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
          >
            {/* Logo Container */}
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-[#f5a623] to-[#e67e22] p-4 flex items-center justify-center">
              {/* Clay Sun Image */}
              <Image
                src="/Smiling Clay Sun Character.png"
                alt="Sunny - Clay Sun Character"
                width={140}
                height={140}
                className="relative z-10 w-full h-full object-contain"
              />

              {/* ALPHA text overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-3xl font-bold tracking-wide text-white drop-shadow-lg">
                  ALPHA
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">
                  Sunny
                </h3>
                {/* External link icon */}
                <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                An open-source AI teaching companion - Alpha release
              </p>
            </div>
          </a>

          {/* Bot - Clickable */}
          <a
            href="https://github.com/Zwin-ux/botbot/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
          >
            {/* Logo Container */}
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-[#4a9d9c] to-[#2ecc71] p-4 flex items-center justify-center">
              <Image
                src="/transparent.png"
                alt="Bot Logo"
                width={140}
                height={140}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>

            {/* Project Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">
                  Bot
                </h3>
                {/* External link icon */}
                <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                An online Companion that works with you in multiple platforms (0.4 version is done)
              </p>
            </div>
          </a>

          {/* Hexology - Clickable */}
          <a
            href="https://hexology.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
          >
            {/* Logo Container */}
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-[#d68910] to-[#e67e22] p-4 flex items-center justify-center">
              <Image
                src="/ChatGPT Image Oct 22, 2025, 04_48_00 PM.png"
                alt="Hexology Logo"
                width={140}
                height={140}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>

            {/* Project Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">
                  Hexology
                </h3>
                {/* External link icon */}
                <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                An online Platform to play Hex
              </p>
            </div>
          </a>

          {/* Lattice - In Development */}
          <div className="group relative bg-black rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
            {/* Logo Container */}
            <div className="relative mb-8 mx-auto w-40 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-[#00d9c0] to-[#00a896] p-4 flex items-center justify-center">
              <Image
                src="/ChatGPT Image Oct 29, 2025, 07_01_39 AM.png"
                alt="Lattice Logo"
                width={140}
                height={140}
                className="relative z-10 w-full h-full object-contain"
              />

              {/* IN DEVELOPMENT text overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-lg font-bold tracking-wide text-white drop-shadow-lg">
                  IN DEV
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">
                Lattice
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                MMO browser-based stock market simulator game
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
