import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 bg-zinc-950 text-zinc-400 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column - Logo & tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-white font-bold text-xl mb-2 hover:text-purple-400 transition-colors">
            Bonelli Labs
          </Link>
          <p className="text-sm text-zinc-500 max-w-xs text-center md:text-left">
            Building futuristic, affordable web services and meme-fueled marketing campaigns
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
              href="https://discord.gg/bonelli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-purple-400 transition-colors"
              aria-label="Discord"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a 
              href="mailto:groupbonelli@gmail.com" 
              className="text-zinc-400 hover:text-purple-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-zinc-600">© 2025 Bonelli Labs — Built with ❤️ on Next.js</p>
        </div>
      </div>
    </footer>
  );
}
