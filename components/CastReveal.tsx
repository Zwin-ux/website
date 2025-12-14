"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// --- ICONS ---
const AudioWaveIcon = () => (
  <div className="flex gap-1 items-center justify-center h-12">
    {[1, 2, 3, 4, 5].map((i) => (
      <div
        key={i}
        className="w-1.5 bg-purple-500/80 rounded-full"
        style={{
          height: "20%",
          animation: `wave 1s ease-in-out infinite`,
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ))}
    <style jsx>{`
      @keyframes wave {
        0%,
        100% {
          height: 20%;
          opacity: 0.5;
        }
        50% {
          height: 100%;
          opacity: 1;
          box-shadow: 0 0 8px #a855f7;
        }
      }
    `}</style>
  </div>
);

const OrbitIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <div className="absolute inset-0 border border-blue-500/40 rounded-full animate-[spin_4s_linear_infinite]" />
    <div className="absolute inset-3 border border-purple-500/40 rounded-full animate-[spin_3s_linear_infinite_reverse]" />
    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" />
  </div>
);

const GlitchIcon = () => (
  <div className="relative w-10 h-10 flex items-center justify-center overflow-hidden">
    <div className="text-2xl font-bold text-green-400 animate-glitch-text">?</div>
    <style jsx>{`
      .animate-glitch-text {
        animation: glitch 0.4s infinite;
      }
      @keyframes glitch {
        0% {
          transform: translate(0);
          opacity: 1;
        }
        20% {
          transform: translate(-2px, 2px);
          opacity: 0.8;
        }
        40% {
          transform: translate(2px, -2px);
          opacity: 1;
        }
        60% {
          transform: translate(-1px, -1px);
          opacity: 0.9;
        }
        80% {
          transform: translate(1px, 1px);
          opacity: 1;
        }
        100% {
          transform: translate(0);
          opacity: 1;
        }
      }
    `}</style>
  </div>
);

const VoidIcon = () => (
  <div className="relative w-12 h-12 flex items-center justify-center">
    <div className="absolute inset-0 bg-black rounded-full border border-zinc-800" />
    <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-pulse" />
    <div className="w-full h-[1px] bg-white/30 absolute top-1/2 left-0 animate-[spin_6s_linear_infinite]" />
  </div>
);

const CipherIcon = () => (
  <div className="grid grid-cols-2 gap-1 w-8 h-8">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="bg-white/30 rounded-sm"
        style={{
          animation: `fade 1s infinite alternate`,
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}
    <style jsx>{`
      @keyframes fade {
        0% {
          opacity: 0.2;
        }
        100% {
          opacity: 1;
          background-color: #a855f7;
        }
      }
    `}</style>
  </div>
);

const PulseIcon = () => (
  <div className="relative flex items-center justify-center w-12 h-12">
    <div className="absolute w-3 h-3 bg-white rounded-full" />
    <div className="absolute w-full h-full border border-white/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
  </div>
);

type Card = {
  id: number;
  icon: React.ReactNode;
  color: string;
  featuredDetails?: {
    title: string;
    starring: string;
    tag?: string;
  };
};

const CARDS_DATA: Card[] = [
  {
    id: 1,
    icon: <AudioWaveIcon />,
    color: "border-cyan-400/60",
    featuredDetails: {
      title: "A DAY IN LA",
      starring: "Starting Raphael",
      tag: "Announced",
    },
  },
  { id: 2, icon: <OrbitIcon />, color: "border-blue-500/50" },
  { id: 3, icon: <GlitchIcon />, color: "border-green-500/50" },
  { id: 4, icon: <PulseIcon />, color: "border-pink-500/50" },
  { id: 5, icon: <VoidIcon />, color: "border-zinc-500/50" },
  { id: 6, icon: <CipherIcon />, color: "border-yellow-500/50" },
];

const FEATURED_CARD_ID = 1;

const FeaturedProjectReveal = ({
  details,
  flipped,
}: {
  details: NonNullable<Card["featuredDetails"]>;
  flipped: boolean;
}) => (
  <div className="relative w-full h-full overflow-hidden rounded-xl" style={{ perspective: 1200 }}>
    <motion.div
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full h-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front */}
      <div
        className="absolute inset-0 rounded-xl border border-white/10 bg-zinc-950 shadow-2xl"
        style={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black opacity-80" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-16 border border-white/10 rounded flex items-center justify-center">
            <span className="text-white/20 font-mono text-xl">?</span>
          </div>
        </div>
      </div>

      {/* Back */}
      <div
        className="absolute inset-0 rounded-xl border border-cyan-200/30 bg-gradient-to-br from-[#0b4d59] via-[#0a3646] to-[#042234] shadow-[0_20px_50px_rgba(0,0,0,0.55)]"
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
      >
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(120,213,255,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(142,255,255,0.2),transparent_35%)]" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
        <div className="relative z-10 h-full flex flex-col justify-center px-6 py-5 gap-4">
          <div className="flex items-center gap-3 text-cyan-100/80 text-[11px] tracking-[0.24em] uppercase font-mono">
            <span className="px-3 py-1 rounded-full border border-cyan-200/40 bg-cyan-100/5">
              {details.tag || "Announced"}
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-3xl md:text-4xl font-semibold text-cyan-50 tracking-[0.08em] font-serif">
              {details.title}
            </p>
            <p className="text-sm text-cyan-100/80 font-semibold tracking-[0.18em] uppercase">
              {details.starring}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

export default function CastReveal() {
  const [shuffledCards, setShuffledCards] = useState<Card[]>(CARDS_DATA);
  const [revealedIds, setRevealedIds] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [featuredFlipped, setFeaturedFlipped] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Shuffle cards on mount
    setShuffledCards([...CARDS_DATA].sort(() => Math.random() - 0.5));
  }, []);

  const handleCardClick = (id: number) => {
    if (id === FEATURED_CARD_ID) {
      if (!revealedIds.includes(id)) {
        setRevealedIds((prev) => [...prev, id]);
      }
      setFeaturedFlipped((prev) => !prev);
      return;
    }
    if (!revealedIds.includes(id)) {
      setRevealedIds((prev) => [...prev, id]);
    }
  };

  if (!isClient) return <div className="h-[600px] bg-black" />;

  return (
    <section className="py-24 bg-black border-t border-white/5 overflow-hidden min-h-[600px] flex flex-col">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col">
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            Generation 1
          </h2>
          <p className="text-purple-400/80 font-mono text-sm tracking-[0.2em] uppercase animate-pulse">
            CHRISTMAS DAY
          </p>
        </div>

        {/* Card Area */}
        <div className="relative flex-1 w-full max-w-5xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {shuffledCards.map((card) => {
              const isRevealed = revealedIds.includes(card.id);
              const isFeatured = Boolean(card.featuredDetails);
              const showRevealed = isFeatured ? featuredFlipped : isRevealed;

              return (
                <div key={card.id} className="relative w-full flex items-center justify-center">
                  <motion.div
                    layout
                    onClick={() => handleCardClick(card.id)}
                    className={`
                      relative w-full max-w-[300px] h-[240px] md:h-[270px]
                      rounded-xl border backdrop-blur-md cursor-pointer
                      transition-all duration-300
                      ${showRevealed
                        ? `bg-zinc-900/80 ${card.color} shadow-[0_0_20px_rgba(0,0,0,0.5)]`
                        : `bg-zinc-950 ${isFeatured ? "border-white/20" : "border-white/10"} hover:border-purple-500/50 shadow-2xl hover:scale-105`
                      }
                    `}
                  >
                    {/* Card Content */}
                    <div className="w-full h-full flex flex-col items-center justify-center p-4 relative overflow-hidden">
                      {isFeatured ? (
                        <FeaturedProjectReveal details={card.featuredDetails!} flipped={featuredFlipped} />
                      ) : showRevealed ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                          transition={{ duration: 0.4 }}
                          className="flex flex-col items-center gap-4"
                        >
                          {card.icon}
                          <div className="w-8 h-1 bg-white/10 rounded-full" />
                        </motion.div>
                      ) : (
                        // BACK FACE
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-black opacity-80">
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              backgroundImage:
                                "radial-gradient(#fff 1px, transparent 1px)",
                              backgroundSize: "10px 10px",
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-16 border border-white/10 rounded flex items-center justify-center">
                              <span className="text-white/20 font-mono text-xl">
                                ?
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Helper Text */}
          {revealedIds.length < CARDS_DATA.length && (
            <div className="mt-12 text-center text-zinc-500 text-sm font-mono animate-pulse">
              {revealedIds.length === 0
                ? "Click any card to reveal"
                : revealedIds.includes(FEATURED_CARD_ID)
                ? "Flip A Day in LA. Keep clicking to meet the rest."
                : "Keep clicking..."}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
