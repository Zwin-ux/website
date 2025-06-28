"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero"; // Updated import
import AboutSection from "../components/AboutSection";
import ScrollToTop from "../components/ScrollToTop";
// import Projects from "../components/Projects"; // To be added later

// Placeholders for new service section components
import CustomSitesSection from "../components/CustomSitesSection";
import TechConsultingSection from "../components/TechConsultingSection";
import CreativeMarketingSection from "../components/CreativeMarketingSection";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links (can be refined or moved if using Next.js Link component features)
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
    <div className="bg-black min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col text-white">
        <Hero />

        {/* Services Section Wrapper */}
        <section id="services" className="py-16 md:py-24 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-6 space-y-16 md:space-y-24">
            <CustomSitesSection />
            <TechConsultingSection />
            <CreativeMarketingSection />
          </div>
        </section>

        {/* Placeholder for Projects/Portfolio Section */}
        {/*
        <section id="portfolio" className="py-16 md:py-24 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">Our Work</h2>
            <Projects />
          </div>
        </section>
        */}

        <section id="about" className="py-16 md:py-24 bg-zinc-900">
          <AboutSection />
        </section>
      </main>
      <ScrollToTop />
      
      <footer className="bg-black border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} Bonelli Labs. All rights reserved.</p>
          {/* Optional: Add social links or other footer content here */}
        </div>
      </footer>
    </div>
  );
}
