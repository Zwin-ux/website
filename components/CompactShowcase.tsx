"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "NIMBUS_8",
    status: "ALPHA",
    desc: "Unified community toolkit for Twitch/Discord mapping. Integrated moderation & analytics.",
    link: "https://github.com/Zwin-ux/DarkNimbus",
    color: "text-retro-blue"
  },
  {
    name: "ECHO_MARKETS",
    status: "DEV",
    desc: "MMO stock browser game.",
    link: "https://echomarkets.me/",
    color: "text-retro-green"
  }
];

export default function CompactShowcase() {
  return (
    <section id="showcase" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group border border-white/5 bg-zinc-950/30 p-8 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-8"
            >
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
                className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white hover:text-retro-blue transition-colors border-b border-white/20 pb-1"
              >
                PROCEED_TO_SOURCE »
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
