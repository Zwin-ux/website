"use client";

import React from "react";
import { motion } from "framer-motion";

const projects: Array<{
  name: string;
  status: string;
  desc: string;
  link: string;
  color: string;
}> = [
  // {
  //   name: "NIMBUS_8",
  //   status: "ALPHA",
  //   desc: "Unified community toolkit for Twitch/Discord mapping. Integrated moderation & analytics.",
  //   link: "https://github.com/Zwin-ux/DarkNimbus",
  //   color: "text-retro-blue"
  // },
  // {
  //   name: "ECHO_MARKETS",
  //   status: "DEV",
  //   desc: "Chaotic web-based economy simulator.",
  //   link: "https://github.com/Zwin-ux/Rubrix",
  //   color: "text-[#ff3e3e]"
  // }
];

export default function CompactShowcase() {
  return (
    <section id="showcase" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="group relative border border-white/5 bg-zinc-950/20 p-10 hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-8 isolate overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-4">
                  <h3 className={`text-2xl font-bold uppercase italic tracking-tighter ${project.color}`}>
                    {project.name}
                  </h3>
                  <span className="px-2 py-0.5 border border-white/10 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>
                <p className="text-zinc-500 font-mono text-[11px] leading-relaxed uppercase tracking-widest">
                  {project.desc}
                </p>
              </div>
              
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[11px] font-mono font-black uppercase tracking-[0.25em] text-zinc-400 hover:text-white transition-all duration-300 relative group/link"
              >
                <span className="relative">
                  Proceed to Source
                  <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover/link:w-full transition-all duration-500" />
                </span>
                <span className="text-[14px] transform group-hover/link:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
