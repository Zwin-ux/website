"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("software");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative isolate min-h-[500px] flex items-center justify-center overflow-hidden bg-[#0A0B0E] py-24 md:py-32">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/5"
          >
            <div className="bg-[#121317]/80 rounded-[22px] p-4">
              <Image
                src="/stylized-tree-logo.png"
                alt="Bonelli Labs Logo"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-none">
              Investing in the <br /> Future of Culture
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl mb-10 text-neutral-400 font-light leading-relaxed">
              Currently supporting <span className="text-white font-medium">~4 visionary creators</span>. 
              Our focus is pure investment: <span className="text-white font-medium">0 expected profit</span>. 
              We are here to fuel growth, build software, and pioneer digital excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Explore Software</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              Technical Research
            </button>
          </motion.div>
        </div>
      </div>

      {/* Modern Gradient Border Botttom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
