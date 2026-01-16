"use client";

import { useEffect } from "react";
import Hero from "../components/Hero";
import Research from "../components/Research";
import AboutSection from "../components/AboutSection";
import Hackathons from "../components/Hackathons";
import Footer from "../components/Footer";
import ChatGPTLink from "../components/ChatGPTLink";
import CreatorInvestment from "../components/CreatorInvestment";
import MazenComeback from "../components/MazenComeback";
import CompactShowcase from "../components/CompactShowcase";
import HexologyProject from "../components/HexologyProject";
import VisitorTicker from "../components/VisitorTicker";

export default function Home() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.closest('a[href^="#"]')) {
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
        const id = anchor.getAttribute('href');
        if (id && id !== '#') {
          const element = document.querySelector(id);
          if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-retro-blue/30 scroll-smooth">
      <main className="crt-flicker">
        <VisitorTicker />
        <Hero />
        
        <div className="space-y-4 pb-32">
          {/* Main Showcase: Nimbus & Echo */}
          <CompactShowcase />

          {/* Featured Highlight: Hexology */}
          <HexologyProject />

          {/* Research & Theory */}
          <section id="research">
            <Research />
          </section>

          {/* Creator commitment */}
          <section id="investment">
            <CreatorInvestment />
          </section>

          {/* Secondary content */}
          <section id="vision">
            <MazenComeback />
          </section>

          <section id="hackathons">
            <Hackathons />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <div className="flex justify-center py-20 border-t border-white/5 bg-zinc-950/50">
            <ChatGPTLink />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
