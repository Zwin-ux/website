"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/synergy", label: "Synergy" },
  { href: "/superior", label: "Superior" },
  { href: "https://github.com/Zwin-ux", label: "GitHub", external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-nav-border bg-nav-background/95 text-nav-text backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold uppercase tracking-[0.18em] text-white"
        >
          Bonelli
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-slate-300 hover:text-white"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm ${
                    pathname === link.href
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button
          className="text-slate-300 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-nav-border bg-[#070d1d] md:hidden">
          <ul className="space-y-3 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-slate-300"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-sm ${
                      pathname === link.href ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
