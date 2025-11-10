import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative isolate min-h-[280px] py-12 md:py-16 flex flex-col items-center text-center px-6 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 overflow-hidden">
      {/* Animated overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-gradient-shift"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
        {/* Tree Logo */}
        <div className="mb-4">
          <Image
            src="/stylized-tree-logo.png"
            alt="Bonelli Labs Logo"
            width={80}
            height={80}
            className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Bonelli.Dev Heading */}
        <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight text-white drop-shadow-lg">
          Bonelli.Dev
        </h1>

        {/* Tagline */}
        <p className="text-sm md:text-base mb-6 text-white/90 font-light drop-shadow-md">
          Turning experimental computation into usable culture
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <button
            onClick={scrollToProjects}
            className="px-6 py-2.5 bg-white text-purple-600 font-semibold rounded-lg text-sm hover:bg-white/90 transition-all shadow-lg transform hover:scale-105"
          >
            View Projects
          </button>
          <Link
            href="/commissions"
            className="px-6 py-2.5 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-lg text-sm hover:bg-white/30 transition-all shadow-lg transform hover:scale-105"
          >
            Commission Work
          </Link>
        </div>
      </div>
    </section>
  );
}
