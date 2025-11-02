import React from "react";
import Image from "next/image";

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-white tracking-tight">
          Research
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <a
            href="https://zwin-ux.github.io/P-V-NP/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black rounded-xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    P vs NP — An Intuitive Guide
                  </h3>
                  {/* External link icon */}
                  <svg
                    className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  An accessible exploration of one of computer science's most fundamental questions: can every problem whose solution can be quickly verified also be quickly solved?
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://zwin-ux.github.io/godel-mirror-prompts/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black rounded-xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Gödel's Mirror — Interactive Logic Exploration
                  </h3>
                  <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  An interactive exploration of formal logic and incompleteness through reflective prompt-based constructions.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://parabola-sand.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black rounded-xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer block"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Parabola
                  </h3>
                  {/* External link icon */}
                  <svg
                    className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  A research initiative exploring mathematical modeling and data visualization through parabolic functions and geometric analysis.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-white/5 p-2 flex items-center justify-center">
                  <Image
                    src="/ChatGPT Image Oct 27, 2025, 11_56_41 AM.png"
                    alt="Parabola Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://zwin-ux.github.io/quantum/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-black rounded-xl p-10 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    Quantum Signals
                  </h3>
                  {/* External link icon */}
                  <svg
                    className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  Exploring quantum computing principles and their practical applications.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
