import { memo } from 'react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

const FeatureCard = memo(({ icon, title, description, borderColor }: FeatureCardProps) => (
  <div 
    className={`bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-${borderColor}/30 transition-colors`}
  >
    <div className="w-10 h-10 mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-zinc-400">{description}</p>
  </div>
));
FeatureCard.displayName = 'FeatureCard';

const features = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Unified Chat',
    description: 'Merge Twitch and Discord chats into a single, real-time feed',
    borderColor: 'blue-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Cross-Platform Moderation',
    description: 'Moderate both Twitch and Discord from one dashboard',
    borderColor: 'cyan-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Role Sync',
    description: 'Automatically sync Twitch subscriber status with Discord roles',
    borderColor: 'purple-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    title: 'Real-time Alerts',
    description: 'Get notified of events across platforms in real-time',
    borderColor: 'green-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    title: 'Customizable Overlays',
    description: 'Add interactive overlays to your stream',
    borderColor: 'yellow-500'
  }
];

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Material-UI', category: 'Frontend' },
  { name: 'WebSocket', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'tmi.js', category: 'Twitch Integration' },
  { name: 'discord.js', category: 'Discord Integration' },
  { name: 'SQLite', category: 'Database' }
];

const Nimbus8Project = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Nimbus8</h2>
            <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              Alpha
            </span>
          </div>
          <p className="mt-4 text-xl text-zinc-400 max-w-3xl mx-auto">
            Unified Mod & Community Toolkit for Twitch and Discord
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">Tech Stack</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-zinc-900/30 backdrop-blur-sm p-4 rounded-lg border border-zinc-800">
              <p className="text-white font-medium">{tech.name}</p>
              <p className="text-sm text-zinc-400">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="https://github.com/Zwin-ux/DarkNimbus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          View on GitHub
          <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.16 20 14.418 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Nimbus8Project;
