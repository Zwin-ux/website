import React from "react";

export default function Research() {
  return (
    <section id="research" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-white tracking-tight">
          Research
        </h2>

        <div className="max-w-4xl mx-auto">
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
                  <svg className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  An accessible exploration of one of computer science's most fundamental questions: can every problem whose solution can be quickly verified also be quickly solved?
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
