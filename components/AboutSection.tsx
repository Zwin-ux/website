import React from 'react';
import UpcomingProjects from './UpcomingProjects';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          About Us
        </h2>
        <div className="mb-10">
          <UpcomingProjects />
        </div>
        
        <div className="mt-12 space-y-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-zinc-200 mb-4">OUR PLAYLIST</h3>
            <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://open.spotify.com/embed/playlist/41svkVH46zY2N1ZhdG4OhA" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <a 
            href="mailto:groupbonelli@gmail.com" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
