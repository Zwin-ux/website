import Link from 'next/link';

const EchoMarkets = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-xl blur-3xl -z-10" />
        <div className="inline-flex items-center gap-2 mb-4">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-rose-400 sm:text-5xl">
            Echo Markets
          </h2>
          <span className="px-3 py-1 text-xs font-medium bg-red-500/20 text-red-300 rounded-full border border-red-500/30">
            Pre-Production
          </span>
        </div>
        <p className="text-xl text-zinc-300 max-w-3xl mx-auto mt-4">
          Exploring new ways to design digital markets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Built on Design</h3>
            <p className="text-zinc-300">
              Echo Markets puts good design first. Every page and feature is made to be clear, fair, and easy to use.  
              We want people to feel like they know what’s going on—and that they can try new things without worry.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Always Improving</h3>
            <p className="text-zinc-300">
              We're making things step by step. We test ideas, see what works, and make changes fast. If something doesn’t work, we fix it.  
              Anyone can give feedback or try out new features along the way.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Early Days</h3>
            <p className="text-zinc-400">
              We're just getting started. If you care about design, simple tools, or new ways to trade, you’re welcome to join us and see what we’re building.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-video bg-gradient-to-br from-red-900/30 to-rose-900/30 rounded-xl border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-white/10 mb-4 mx-auto">
                <svg className="w-8 h-8 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white">See What We're Making</h4>
              <p className="text-sm text-zinc-400 max-w-xs mx-auto">
                Check out our progress or share your ideas.
              </p>
              <a
                href="https://github.com/Zwin-ux/echo-markets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 mt-4 text-sm font-medium text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-lg hover:opacity-90 transition-opacity"
              >
                View on GitHub
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.14 20.16 22 16.418 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Why We Care</h3>
        <p className="text-zinc-400 max-w-3xl mx-auto">
          We have big plans for this .  
          If you want to help, try things out, or just follow along, you’re invited.
        </p>
      </div>
    </section>
  );
};

export default EchoMarkets;
