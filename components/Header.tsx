import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-b from-black to-[#0a0a0a]/80 backdrop-blur-md border-t border-b border-white/10 shadow-md transition-colors duration-300 ease-in-out py-5">


        <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-white font-semibold text-lg hover:text-gray-300 transition-colors">

            bonelli.dev
          </Link>

          {/* Contact Button */}
          <a
            href="mailto:groupbonelli@gmail.com"
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg text-sm hover:opacity-90 hover:shadow-purple-500/50 transition-all shadow-lg transform hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
