import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-[#1a1c23]/80 backdrop-blur-md border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-neutral-100 font-semibold text-lg hover:text-neutral-300 transition-colors">
            bonelli.dev
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/wall"
              className="text-neutral-100 font-mono text-sm tracking-wider hover:text-neutral-300 transition-colors"
            >
              THE WALL
            </Link>
            <a
              href="mailto:mzwin3545@gmail.com"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg text-sm hover:opacity-90 hover:shadow-purple-500/50 transition-all shadow-lg transform hover:scale-105"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
