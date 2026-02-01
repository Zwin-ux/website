"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SpotifyEmbed() {
  return (
    <section className="px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[32px] bg-card border border-border/40 p-1"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
          
          <iframe
            style={{ borderRadius: "28px" }}
            src="https://open.spotify.com/embed/playlist/41svkVH46zY2N1ZhdG4OhA?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="relative z-10 w-full"
            title="Spotify Playlist"
          />
        </motion.div>
      </div>
    </section>
  );
}
