import { memo } from 'react';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
}

const FeatureCard = memo(({ icon, title, description, borderColor }: FeatureCardProps) => (
  <div 
    className={`bg-zinc-900/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-800 hover:border-${borderColor}/30 transition-colors`}
  >
    <div className="w-12 h-12 mb-4 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-zinc-400">{description}</p>
  </div>
));
FeatureCard.displayName = 'FeatureCard';

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Smart Reminders',
    description: 'Never miss important tasks with natural language reminders and recurring alerts.',
    borderColor: 'green-500'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Team Standups',
    description: 'Automate daily standups and keep everyone aligned with minimal effort.',
    borderColor: 'blue-500'
  },
  {
    icon: (
      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Team Fun',
    description: 'Lighten the mood with interactive games and team-building activities.',
    borderColor: 'purple-500'
  }
];

export default function BotBotHome() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-black to-green-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-900/30 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full border border-green-800/50 mb-6">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Beta - Now Available
          </div>
          
          <div className="mb-8">
            <div className="relative w-28 h-28 mx-auto mb-6">
              <Image
                src="/transparent.png"
                alt="BotBot Logo"
                fill
                sizes="112px"
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            BotBot
          </h1>
          
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto mb-6">
            Your Smart Bot   for Discord servers.
          </p>
          
          <div className="max-w-2xl mx-auto opacity-80 text-zinc-400 text-sm mb-6">
            Streamline your Discord server's workflow with smart reminders, standups, and more.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.com/oauth2/authorize?client_id=YOUR_BOT_ID"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-green-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Add BotBot to your Discord server"
            >
              Add to Discord
            </a>
            <a
              href="https://github.com/Zwin-ux/botbot"
              className="px-8 py-3 border-2 border-zinc-600 hover:border-zinc-400 text-white font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View BotBot on GitHub"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
    </section>
  );
}
