import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          About Us
        </h2>
        <p className="text-xl text-zinc-300 mb-8">
          Small team, big ideas. We focus on building tools that solve real problems.
        </p>
        
        <div className="space-y-6 text-zinc-400 text-left max-w-2xl mx-auto">
          <p>
            We're a small group of designers and developers who believe in building things that matter.
            Our approach is simple: focus on what works, ship fast, and iterate based on real feedback.
          </p>
          <p>
            Whether it's a new product, a creative experiment, or a solution to a tricky problem,
            we're here to make it happen. No fluff, just results.
          </p>
        </div>
        
        <div className="mt-12">
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
