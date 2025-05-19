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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Optimized for high-performance AI model inference and training.',
    borderColor: 'blue-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Secure by Design',
    description: 'Enterprise-grade security and compliance for your most sensitive data.',
    borderColor: 'cyan-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Easy Integration',
    description: 'Seamlessly connect with your existing tools and workflows.',
    borderColor: 'purple-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Reliable',
    description: '99.9% uptime guarantee with automatic failover and backups.',
    borderColor: 'green-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Team Collaboration',
    description: 'Built-in tools for seamless team collaboration and sharing.',
    borderColor: 'indigo-500'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: 'Global CDN',
    description: 'Deliver content with low latency from our global network.',
    borderColor: 'yellow-500'
  }
];

export default function Nimbus8Project() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-zinc-900 via-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-900/30 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-800/50 mb-4">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Pre-Alpha - Early Development
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
            Nimbus 8
          </h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
            A next-generation cloud platform for AI-powered applications.
          </p>
          <div className="max-w-2xl mx-auto opacity-80 text-zinc-400 text-sm mb-8">
            Build, deploy, and scale AI models with unprecedented ease and efficiency.
          </div>
          <Link 
            href="#waitlist"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-500 text-blue-400 font-medium rounded-full hover:bg-blue-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 group"
            aria-label="Join the Nimbus 8 waitlist"
          >
            Join Waitlist
            <svg 
              className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
