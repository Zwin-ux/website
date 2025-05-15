"use client";
import React, { useRef, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Fade-in on scroll animation
function useFadeInOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".fade-in-section").forEach((el) => {
      el.classList.add("opacity-0", "translate-y-8", "transition", "duration-700");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  useFadeInOnScroll();
  const contactRef = useRef<HTMLDivElement>(null);

  const handleContactScroll = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Hero onContactClick={handleContactScroll} />
        <About />
        <Projects />
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
