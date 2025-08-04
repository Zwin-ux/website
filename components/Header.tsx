"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const mainNavLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "mailto:mzwin3545@gmail.com" }, // Or a contact form page
];

const serviceSubLinks = [
  { label: "Custom Sites", href: "#custom-sites" },
  { label: "Tech Consulting", href: "#tech-consulting" },
  { label: "Creative Marketing", href: "#creative-marketing" },
];

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-zinc-800/70">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="relative h-8 w-8 md:h-10 md:w-10">
              <Image
                src="/Stylized Tree Logo Design.png"
                alt="Bonelli Labs Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 2rem, 2.5rem"
                priority
              />
            </div>
            <span className="
              text-xl md:text-2xl font-bold 
              bg-gradient-to-r from-orange-400 to-yellow-300 
              bg-clip-text text-transparent 
              animate-fadeInUp
              transition-all duration-200
              hover:opacity-90
              cursor-pointer
              flex items-center
            ">
              Bonelli Labs
            </span>
          </Link>
          
          <ul className="hidden md:flex space-x-2">
            {mainNavLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.label === "Services" ? (
                  <>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all"
                    >
                      {link.label}
                    </button>
                    {servicesOpen && (
                      <div
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        className="absolute top-full left-0 mt-1 w-48 bg-zinc-800/90 backdrop-blur-md rounded-md shadow-lg py-1 z-20"
                      >
                        {serviceSubLinks.map(subLink => (
                          <Link
                            key={subLink.label}
                            href={subLink.href}
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2 text-sm text-zinc-300 hover:bg-purple-600 hover:text-white transition-colors"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-md transition-all"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Mobile Menu Button (basic placeholder) */}
          <div className="md:hidden">
            <button className="text-zinc-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
