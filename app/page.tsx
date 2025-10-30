"use client";
import { useEffect } from "react";
import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import Research from "../components/Research";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

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
        <div className="bg-[#2a2e1f] p-6 rounded-lg">
          <Image
            src="/stylized-tree-logo.png"
            alt="Bonelli Logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>
      </div>
      
      <main className="flex-1 flex flex-col">
        <FeaturedProjects />
        <Research />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
