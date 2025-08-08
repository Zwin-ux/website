"use client";

import React, { useRef } from "react";


export default function UpcomingAndShow() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLDivElement>("[data-card]");
    const delta = card ? card.clientWidth + 16 : 280; // width + gap
    rail.scrollBy({ left: dir * delta, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* The Mazen Show - simple carousel */}
        <div className="fade-in-section opacity-100 translate-y-0">
          <div className="flex items-end justify-between mb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">The Mazen Show</h2>
              <p className="text-zinc-300">Teaser carousel. Episodes TBD <span className="font-semibold">?</span></p>
            </div>
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scrollByCards(-1)}
                className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                onClick={() => scrollByCards(1)}
                className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>

          <div
            ref={railRef}
            className="overflow-x-auto no-scrollbar scroll-smooth"
          >
            <div className="flex gap-4 snap-x snap-mandatory">
              {[0,1,2,3,4].map((i) => (
                <div
                  key={i}
                  data-card
                  className="snap-start shrink-0 w-[260px] md:w-[320px] h-[180px] md:h-[220px] rounded-xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden"
                >
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="text-6xl md:text-7xl">?</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-sm text-zinc-300 bg-black/30 backdrop-blur-sm">
                    Episode {i + 1} — Coming soon
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* mobile controls */}
          <div className="mt-4 flex sm:hidden justify-center gap-2">
            <button
              onClick={() => scrollByCards(-1)}
              className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={() => scrollByCards(1)}
              className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
