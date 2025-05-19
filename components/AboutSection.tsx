import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            Our Team
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            A team of 10+ passionate designers and engineers creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="group">
              <div className="aspect-square bg-zinc-800 rounded-xl mb-3 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-xs font-medium text-white bg-black/50 px-3 py-1.5 rounded-full">
                    Team Member {i + 1}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-medium text-white">Team Member</h3>
                <p className="text-sm text-zinc-400">Role</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            We're a diverse team of creative professionals dedicated to building innovative solutions 
            that make a real difference for our clients and their users.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
