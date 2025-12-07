import React from "react";

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20 text-white tracking-tight">
          Active Hackathons
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Polkadot Cloud Hackathon - ENDED */}
          <div
            className="group relative bg-black rounded-xl p-10 md:p-12 border border-white/5 opacity-50 cursor-not-allowed block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white line-through">
                    Build Resilient Apps with Polkadot Cloud
                  </h3>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base mb-3 line-through">
                  Building resilient applications using Polkadot Cloud infrastructure.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-sm font-medium line-through">
                    Deadline: Nov 17, 2025 @ 11:45pm UTC (≈ 3:45pm PST)
                  </span>
                  <span className="text-red-400 text-sm font-bold ml-2">
                    ENDED
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FIBO Hackathon - ACTIVE */}
          <div
            className="group relative bg-zinc-900/50 rounded-xl p-10 md:p-12 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    FIBO Hackathon
                  </h3>
                  <span className="bg-yellow-500/10 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full border border-yellow-500/20 tracking-wide uppercase">
                    We are doing this
                  </span>
                </div>
                <p className="text-white/70 leading-relaxed text-sm md:text-base mb-3">
                  Participating in the FIBO Hackathon.
                </p>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white/90 text-sm font-medium">
                    Deadline: Dec 15, 2025 @ 5:00pm PST
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Kiroween Hackathon - ENDED */}
          <div
            className="group relative bg-black rounded-xl p-10 md:p-12 border border-white/5 opacity-50 cursor-not-allowed block"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-semibold text-white line-through">
                    Kiroween Hackathon
                  </h3>
                </div>
                <p className="text-white/50 leading-relaxed text-sm md:text-base mb-3 line-through">
                  Participating in the Kiroween hackathon hosted by DEV Community.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-sm font-medium line-through">
                    Deadline: Dec 5, 2025 @ 2:00pm PST
                  </span>
                  <span className="text-red-400 text-sm font-bold ml-2">
                    ENDED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
