"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Commissions", href: "/commissions" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-md border-b border-zinc-800/50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="group">
          <span className="font-bold text-xl tracking-wide text-white group-hover:text-purple-400 transition-colors duration-200">Bonelli Labs</span>
        </Link>
        <ul className="flex space-x-2 sm:space-x-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm sm:text-base transition-all duration-200 font-medium ${active 
                    ? "text-white bg-zinc-800 border-b-2 border-purple-500" 
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900/60"}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
