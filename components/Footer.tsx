import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-zinc-950 text-zinc-400 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Logo & tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-white font-bold text-xl mb-2 hover:text-purple-400 transition-colors">
            Mazen Zwin
          </Link>
          <p className="text-sm text-zinc-500 max-w-xs text-center md:text-left">
            Full-stack developer and technical consultant specializing in modern web applications
          </p>
        </div>

        {/* Middle column - Quick links */}
        <div className="flex flex-col items-center">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
              Home
            </Link>
            <Link href="/#projects" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
              Projects
            </Link>
            <Link href="/commissions" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
              Commissions
            </Link>
            <Link href="/#contact" className="text-zinc-400 hover:text-purple-400 transition-colors text-sm">
              Contact
            </Link>
          </nav>
        </div>

        {/* Right column - Social & Contact */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a 
              href="https://github.com/Zwin-ux" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.39-1.333-1.76-1.333-1.76-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="mailto:mzwin3545@gmail.com" 
              className="text-zinc-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-zinc-600">© 2025 Mazen Zwin — Built with ❤️ on Next.js</p>
        </div>
      </div>
    </footer>
  );
}
