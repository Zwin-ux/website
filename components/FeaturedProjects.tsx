import React from "react";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sunny - SOON Teaser */}
          <div className="group relative bg-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50 transition-all duration-300">
            {/* Logo Container with Gradient Background */}
            <div className="relative mb-6 mx-auto w-52 h-52 rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 p-6 flex items-center justify-center animate-pulse-light">
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent"></div>

              {/* Clay Sun Image */}
              <Image
                src="/Smiling Clay Sun Character.png"
                alt="Sunny - Clay Sun Character"
                width={200}
                height={200}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />

              {/* SOON text overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative inline-block text-5xl font-black tracking-wider text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  <span className="relative z-10">SOON</span>
                  <span className="pointer-events-none absolute inset-0 -skew-x-6 animate-shine bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Sunny
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                An open-source AI teaching companion - Coming Soon
              </p>
            </div>
          </div>

          {/* Bot - Clickable */}
          <a
            href="https://github.com/Zwin-ux/botbot/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer transform hover:scale-105"
          >
            {/* Logo Container with Gradient Background */}
            <div className="relative mb-6 mx-auto w-52 h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-green-500 p-6 flex items-center justify-center animate-rotate-halo">
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent"></div>

              <Image
                src="/transparent.png"
                alt="Bot Logo"
                width={200}
                height={200}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Project Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <h3 className="text-2xl font-bold text-white">
                  Bot
                </h3>
                {/* External link icon */}
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A friendly personal assistant that organizes, reminds, and learns with you — your online companion for creativity and structure.
              </p>
            </div>
          </a>

          {/* Hexology - Clickable */}
          <a
            href="https://hexology.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-zinc-800/50 rounded-2xl p-6 backdrop-blur-sm border border-zinc-700/50 hover:border-zinc-600 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer transform hover:scale-105"
          >
            {/* Logo Container with Gradient Background */}
            <div className="relative mb-6 mx-auto w-52 h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-600 to-orange-600 p-6 flex items-center justify-center hover:animate-shimmer">
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent"></div>

              <Image
                src="/ChatGPT Image Oct 22, 2025, 04_48_00 PM.png"
                alt="Hexology Logo"
                width={200}
                height={200}
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Project Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <h3 className="text-2xl font-bold text-white">
                  Hexology
                </h3>
                {/* External link icon */}
                <svg className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A digital revival of the 1920s board game Hex — strategy, geometry, and AI combined into a sleek multiplayer platform.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
