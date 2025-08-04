"use client";

import React from "react";
import { commissions } from "../lib/commissions";

export default function Commissions() {
  return (
    <section id="commissions" className="py-16 px-4 text-white">
      <div className="w-full max-w-5xl mx-auto pb-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Commissions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {commissions.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-6 shadow-lg border border-zinc-800 flex flex-col items-center text-center min-h-[350px] h-full bg-transparent"
            >
              <span className="inline-block mb-2 px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-400 to-blue-500 text-white font-semibold shadow-inner">
                {c.price}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
              <p className="text-zinc-400 mb-6 flex-1">{c.description}</p>
              <div className="mt-auto w-full flex justify-center">
                <a
                  href={`mailto:mzwin3545@gmail.com?subject=Commission%20Order:%20${encodeURIComponent(c.title)}`}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 text-white font-bold shadow hover:opacity-90 transition-all w-full max-w-[160px]"
                >
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
