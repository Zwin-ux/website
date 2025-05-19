"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Commissions", href: "#commissions" },
  { label: "About Us", href: "#about" },
];

export default function Header() {
  const pathname = usePathname();
  
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-zinc-800/50">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="group">
            <span className="
              text-xl md:text-2xl font-bold 
              bg-gradient-to-r from-purple-400 to-blue-500 
              bg-clip-text text-transparent 
              animate-fadeInUp
              transition-all duration-200
              hover:opacity-90
              cursor-pointer
            ">
              Bonelli
            </span>
          </Link>
          
          <ul className="flex space-x-1 md:space-x-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1.5 text-xs md:text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/30 rounded-md transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
