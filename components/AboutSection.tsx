import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-16 md:py-20 bg-[#0f1115]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
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
    </section>
  );
}
