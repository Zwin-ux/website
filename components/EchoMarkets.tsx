import Link from 'next/link';

const EchoMarkets = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16 relative">
        <div className="absolute -inset-4 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)] rounded-xl blur-3xl -z-10 animate-pulse" />
        <div className="inline-flex items-center gap-3 mb-6">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-rose-400 to-orange-500 sm:text-6xl tracking-[0.05em] uppercase font-mono italic">
            Echo Markets
          </h2>
          <span className="px-3 py-1 text-[10px] font-mono font-bold bg-red-500/10 text-red-500 rounded-sm border border-red-500/20 uppercase tracking-tighter">
            Pre-Production
          </span>
        </div>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mt-2 font-light leading-relaxed">
          Exploring experimental market dynamics through a chaotic MMO stock lens.
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
                href="https://github.com/Zwin-ux/Rubrix"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center px-8 py-4 mt-6 text-xs font-mono font-bold uppercase tracking-[3px] text-white bg-zinc-950 border border-white/10 rounded-sm hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Access Source</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
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
