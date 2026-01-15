"use client";

import { memo } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

const FeatureCard = memo(({ icon, title, description, borderColor }: FeatureCardProps) => (
  <div 
    className={`bg-zinc-950 p-6 border border-white/10 hover:border-${borderColor}/50 transition-colors relative group`}
  >
    <div className="absolute top-0 left-0 w-1 h-1 bg-white/20 group-hover:bg-retro-blue" />
    <div className="w-8 h-8 mb-4 flex items-center justify-center grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100">
      {icon}
    </div>
    <h3 className="text-sm font-bold text-white mb-2 uppercase tracking-widest">{title}</h3>
    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-relaxed">{description}</p>
  </div>
));
FeatureCard.displayName = 'FeatureCard';

const features = [
  {
    icon: (
      <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Modern Hex Play',
    description: 'A sleek, responsive interface for playing the classic game of Hex online.',
    borderColor: 'orange-500'
  },
  {
    icon: (
      <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127c-.57.345-1.201.643-1.873.893a.076.076 0 0 0-.04.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
    title: 'Discord Integration',
    description: 'Play directly within Discord using our seamless app integration.',
    borderColor: 'indigo-500'
  }
];

const HexologyProject = () => {
  return (
    <section className="py-24 px-4 border-t border-white/10 bg-zinc-950/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter">Hexology</h2>
              <span className="px-2 py-0.5 text-[9px] font-mono bg-retro-green/10 text-retro-green border border-retro-green/30 uppercase tracking-widest">
                RELEASE_O1
              </span>
            </div>
            <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em] leading-relaxed">
              The definitive way to play Hex online. Engineered for competitive precision and social integration.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://hexology.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button text-[10px]"
              >
                PROCEED_TO_WEB
              </a>
              <a
                href="https://discord.com/activities/1443319127170089172?referrer_id=1407892797217964133"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest hover:bg-white/5"
              >
                DISCORD_ACTIVITY
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 gap-4 w-full">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                borderColor={feature.borderColor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HexologyProject;
