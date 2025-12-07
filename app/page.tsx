"use client";
import { useEffect } from "react";
import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import Research from "../components/Research";
import AboutSection from "../components/AboutSection";
import Hackathons from "../components/Hackathons";
import Footer from "../components/Footer";
import ChatGPTLink from "../components/ChatGPTLink";
import CastReveal from "../components/CastReveal";
import MazenComeback from "../components/MazenComeback";


export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id && id !== '#') {
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      {/* Bonelli Logo Header */}
      <div className="bg-black py-16 md:py-20 flex flex-col items-center border-b border-white/5">
        <div className="bg-[#2a2e1f] p-6 rounded-lg mb-8">
          <Image
            src="/stylized-tree-logo.png"
            alt="Bonelli Logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        <div className="text-center max-w-xl px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            BONELLI IS NOW PUBLIC
          </h1>
          <p className="text-zinc-400 mb-6">
            We are allowing guests to join to observe us for the news.
          </p>
          <ChatGPTLink className="mt-8 mb-12" />

          <p className="text-sm md:text-base text-white/90 font-light">
            Production Company
          </p>
        </div>
      </div>



      <main className="flex-1 flex flex-col">
        <div>
          <Research />
        </div>
        <div>
          <FeaturedProjects />
        </div>

        {/* Cast Reveal Section */}
        <div>
          <CastReveal />
        </div>
        <div>
          <MazenComeback />
        </div>

        <div>
          <AboutSection />
        </div>

        {/* Music Video Status */}
        <div className="py-10 text-center">
          <p className="text-white/50 text-sm md:text-base">
            Our first music video is in production
          </p>
        </div>

        <div>
          <Hackathons />
        </div>
      </main>
      <Footer />
    </div>
  );
}
