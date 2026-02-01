"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-4">
              Bonelli<span className="text-accent">.dev</span>
            </h1>
          </div>
          <p className="text-zinc-400 max-w-xl text-xl leading-relaxed">
            We build software to <span className="text-foreground font-semibold">help others</span> and make products that <span className="text-foreground font-semibold">matter.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
