"use client";

import { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import Research from "../components/Research";
import AboutSection from "../components/AboutSection";
import Hackathons from "../components/Hackathons";
import Footer from "../components/Footer";
import ChatGPTLink from "../components/ChatGPTLink";
import CastReveal from "../components/CastReveal";
import MazenComeback from "../components/MazenComeback";
import BonelliMark from "../components/BonelliMark"; 
import Nimbus8Project from "../components/Nimbus8Project";
import EchoMarkets from "../components/EchoMarkets";
import HexologyProject from "../components/HexologyProject";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
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
    <div className="min-h-screen bg-[#0A0B0E] text-white selection:bg-purple-500/30">
      <main>
        <Hero />
        
        <div className="space-y-32 pb-32">
          <section id="software">
            <FeaturedProjects />
          </section>

          <section id="showcase">
            <div className="max-w-7xl mx-auto px-6 space-y-32">
              <Nimbus8Project />
              <EchoMarkets />
              <HexologyProject />
            </div>
          </section>

          <section id="research">
            <Research />
          </section>

          <section id="team">
            <CastReveal />
          </section>

          <section id="vision">
            <MazenComeback />
          </section>

          <section id="hackathons">
            <Hackathons />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <div className="flex justify-center py-20">
            <ChatGPTLink />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
