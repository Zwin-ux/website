"use client";
import { useEffect } from "react";
import Header from "../components/Header";
import BotBotHome from "../components/BotBotHome";
import EchoMarkets from "../components/EchoMarkets";
import Nimbus8Project from "../components/Nimbus8Project";
import AboutSection from "../components/AboutSection";
import Commissions from "../components/Commissions";
import ScrollToTop from "../components/ScrollToTop";

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
    <div className="bg-black min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col bg-zinc-900 text-white pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center px-6 pt-16">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Bonelli Labs
            </h1>
            <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Building innovative digital products and solutions that make an impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#products" 
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                View Products
              </a>
              <a 
                href="#commissions" 
                className="px-6 py-3 border border-zinc-700 text-white font-medium rounded-full hover:bg-zinc-800/50 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16">
          <BotBotHome />
          <div className="border-t border-zinc-800 mt-16">
            <EchoMarkets />
          </div>
          <div className="border-t border-zinc-800 mt-16">
            <Nimbus8Project />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <AboutSection />
          <div className="my-16 flex justify-center">
            <Commissions />
          </div>

        </section>

      </main>
      <ScrollToTop />
      
      {/* Footer */}
      <footer className="bg-black/50 border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-zinc-400 text-sm">
          <p>© {new Date().getFullYear()} Bonelli Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
