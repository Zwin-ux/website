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
import GitHubPortfolio from "../components/GitHubPortfolio";
import SnakeGame from "../components/SnakeGame";
import BusinessWebsiteSetupSection from "../components/BusinessWebsiteSetupSection";
import Contact from "../components/Contact";
import UpcomingAndShow from "../components/UpcomingAndShow";

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

    // Handle fade-in animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach((section) => observer.observe(section));

    // Immediately show the hero section since it's above the fold
    const heroSection = document.querySelector('.fade-in-section');
    if (heroSection) {
      heroSection.classList.add('opacity-100', 'translate-y-0');
    }

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col text-white">
        <Hero />

        {/* Services Section Wrapper */}
        <section id="services" className="py-16 md:py-24 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-6 space-y-16 md:space-y-24">
            <BusinessWebsiteSetupSection />
            <CustomSitesSection />
            <TechConsultingSection />
            <CreativeMarketingSection />
          </div>
        </section>

        {/* GitHub Portfolio Section */}
        <section id="portfolio" className="py-16 md:py-24 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <GitHubPortfolio />
          </div>
        </section>

        {/* Upcoming + Mazen Show Section */}
        <section id="upcoming" className="bg-zinc-900">
          <UpcomingAndShow />
        </section>

        <section id="about" className="py-16 md:py-24 bg-zinc-900">
          <AboutSection />
        </section>

        {/* Snake Game Section */}
        <section className="bg-black">
          <SnakeGame />
        </section>

        {/* Contact Section */}
        <section className="bg-zinc-900">
          <Contact />
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
