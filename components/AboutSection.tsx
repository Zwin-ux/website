import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10">
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
