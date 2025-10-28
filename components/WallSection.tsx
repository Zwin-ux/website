import React from 'react';
import Link from 'next/link';

export default function WallSection() {
  return (
    <section className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="border border-white/10 bg-[#0a0a0a] p-8 md:p-12">
          {/* Title */}
          <h2 className="text-white font-mono text-2xl md:text-3xl tracking-tight mb-6">
            THE WALL
          </h2>

          {/* Description */}
          <div className="space-y-4 text-neutral-400 font-mono text-sm md:text-base leading-relaxed mb-8">
            <p>
              A public digital wall with exactly 100 slots.
            </p>
            <p>
              Each slot is a permanent mark from a human.
            </p>
            <p>
              Each human gets one mark total, ever.
            </p>
            <p>
              When the wall is full, it locks, becomes archived, and displays "Wall One: Sealed."
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/wall"
            className="inline-block bg-white text-black font-mono text-sm px-6 py-3 hover:bg-neutral-200 transition-colors"
          >
            VIEW THE WALL
          </Link>
        </div>
      </div>
    </section>
  );
}
