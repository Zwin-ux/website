"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Bonelli
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-zinc-400">
            Software Engineer
          </p>
          <p className="mt-4 text-zinc-400 max-w-xl leading-relaxed">
            Building full-stack applications, AI/ML systems, and developer tools.
            Focused on shipping working software with clean architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4 text-sm"
        >
          <a
            href="https://github.com/Zwin-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-700 text-zinc-300 hover:text-foreground hover:border-zinc-500 transition-colors rounded"
          >
            GitHub
          </a>
          <a
            href="mailto:groupbonelli@gmail.com"
            className="px-4 py-2 border border-zinc-700 text-zinc-300 hover:text-foreground hover:border-zinc-500 transition-colors rounded"
          >
            Email
          </a>
          <a
            href="/resume"
            className="px-4 py-2 bg-accent text-white hover:bg-blue-600 transition-colors rounded"
          >
            Resume
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-6 text-xs text-zinc-500"
        >
          U.S. Citizen &middot; Clearance Eligible
        </motion.p>
      </div>
    </section>
  );
}
