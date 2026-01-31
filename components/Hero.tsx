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
            Bonelli.Dev
          </h1>
          <p className="mt-4 text-zinc-400 max-w-xl text-lg leading-relaxed">
            Making software and helping creators.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
