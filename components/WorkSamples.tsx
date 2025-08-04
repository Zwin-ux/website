import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Echo Markets',
    description: 'A modern e-commerce platform with AI-powered recommendations',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    image: '/echo-markets-preview.jpg',
    demo: 'https://echo-markets.vercel.app',
    github: 'https://github.com/username/echo-markets'
  },
  {
    id: 2,
    title: 'Nimbus 8',
    description: 'Weather app with real-time data visualization',
    tags: ['React', 'D3.js', 'OpenWeather API'],
    image: '/nimbus8-preview.jpg',
    demo: 'https://nimbus8.vercel.app',
    github: 'https://github.com/username/nimbus8'
  },
  {
    id: 3,
    title: 'BotBot Home',
    description: 'Smart home automation dashboard with IoT integration',
    tags: ['React', 'Node.js', 'WebSockets'],
    image: '/botbot-preview.jpg',
    demo: 'https://botbot.vercel.app',
    github: 'https://github.com/username/botbot'
  },
  {
    id: 4,
    title: 'Portfolio Studio',
    description: 'Personal portfolio site with 3D animations',
    tags: ['Three.js', 'Next.js', 'Framer Motion'],
    image: '/portfolio-studio-preview.jpg',
    demo: 'https://portfolio-studio.vercel.app',
    github: 'https://github.com/username/portfolio-studio'
  }
];

const WorkSamples = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
              Our Work
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            A selection of our recent projects. Click to explore more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-video bg-zinc-900"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-zinc-800/80 text-zinc-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-zinc-600 text-white rounded-lg font-medium hover:bg-zinc-800/50 transition-colors flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.39-1.333-1.76-1.333-1.76-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0">
                <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSamples;
