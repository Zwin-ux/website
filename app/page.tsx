"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import FeaturedProjects from "../components/FeaturedProjects";
import Research from "../components/Research";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import ChatGPTLink from "../components/ChatGPTLink";

const TWITCH_CHANNEL = "zwintwitch";

export default function Home() {
  const [twitchParent, setTwitchParent] = useState<string | null>(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.matches('a[href^="#"]')) {
        e.preventDefault();
        const id = target.getAttribute("href");
        if (id && id !== "#") {
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    if (typeof window !== "undefined") {
      setTwitchParent(window.location.hostname || "localhost");
    }

    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black">
      {/* Bonelli Logo Header */}
      <div className="bg-black py-16 md:py-20 flex flex-col items-center border-b border-white/5">
        <div className="bg-[#2a2e1f] p-6 rounded-lg mb-8">
          <Image
            src="/stylized-tree-logo.png"
            alt="Bonelli Logo"
            width={140}
            height={140}
            className="object-contain"
          />
        </div>

        <div className="text-center max-w-xl px-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
            WE HAVE LAUNCHED!
          </h1>
          <p className="text-zinc-400 mb-6">
            We are allowing guests to join to observe us for the news.
          </p>
          <ChatGPTLink className="mt-8 mb-12" />
          <a
            href="https://www.instagram.com/teambonelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white transition"
          >
            Follow on Instagram
          </a>

          <p className="text-sm md:text-base text-white/90 font-light">
            Production Company
          </p>
        </div>
      </div>

      <main className="flex-1 flex flex-col">
        <section className="bg-zinc-950 border-b border-white/5 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/3 space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  Livecast
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                  Watch ZwinTwitch Live
                </h2>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  Catch the stream directly on the site. If the player does not
                  load, open the channel on Twitch.
                </p>
                <a
                  href={`https://www.twitch.tv/${TWITCH_CHANNEL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                >
                  Open on Twitch
                </a>
              </div>

              <div className="lg:w-2/3 w-full">
                <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-lg">
                  <div className="relative w-full aspect-video">
                    {twitchParent ? (
                      <iframe
                        src={`https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${twitchParent}`}
                        title="ZwinTwitch live stream"
                        className="absolute inset-0 h-full w-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-white/60 font-mono">
                        Loading live stream...
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-xs text-white/50">
                  Stream player uses your current domain as the Twitch embed
                  parent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div>
          <Research />
        </div>
        <div>
          <FeaturedProjects />
        </div>

        <div>
          <AboutSection />
        </div>

        {/* Music Video Status */}
        <div className="py-10 text-center">
          <p className="text-white/50 text-sm md:text-base">
            Our first music video is in production
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
}
