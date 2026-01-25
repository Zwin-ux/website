"use client";

import { motion } from "framer-motion";

// Cute pixelated hexagon mascot
const HexMascot = () => (
  <svg viewBox="0 0 120 140" className="w-24 h-28 md:w-32 md:h-36">
    {/* Main hexagon body */}
    <motion.polygon
      points="60,10 110,35 110,85 60,110 10,85 10,35"
      fill="#1a1a2e"
      stroke="#00ff41"
      strokeWidth="3"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 65, 0.5))" }}
    />

    {/* Left eye */}
    <rect x="35" y="45" width="12" height="12" fill="#00ff41" />
    <rect x="38" y="48" width="4" height="4" fill="#ffffff" />

    {/* Right eye */}
    <rect x="73" y="45" width="12" height="12" fill="#00ff41" />
    <rect x="76" y="48" width="4" height="4" fill="#ffffff" />

    {/* Smile */}
    <motion.path
      d="M 45 72 Q 60 88 75 72"
      fill="none"
      stroke="#00ff41"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0.8 }}
      animate={{ pathLength: [0.8, 1, 0.8] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Blush marks */}
    <rect x="22" y="60" width="8" height="5" fill="#ff6b9d" opacity="0.7" rx="2" />
    <rect x="90" y="60" width="8" height="5" fill="#ff6b9d" opacity="0.7" rx="2" />

    {/* Sparkle decorations */}
    <motion.text
      x="5"
      y="25"
      fill="#ffd93d"
      fontSize="14"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1, repeat: Infinity }}
    >
      *
    </motion.text>
    <motion.text
      x="105"
      y="20"
      fill="#00e5ff"
      fontSize="12"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
    >
      +
    </motion.text>
    <motion.text
      x="100"
      y="105"
      fill="#ff6b9d"
      fontSize="10"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 0.8, repeat: Infinity, delay: 0.6 }}
    >
      *
    </motion.text>
  </svg>
);

const opportunities = [
  {
    title: "Event Organizers",
    description: "Help us bring people together. Plan tournaments, community game nights, and fun events for Hexology players.",
    color: "retro-green",
    borderColor: "border-retro-green/30",
    bgColor: "bg-retro-green/5",
  },
  {
    title: "Open Source Contributors",
    description: "We're building in the open. Jump into the codebase, suggest features, fix bugs, or help with documentation.",
    color: "retro-blue",
    borderColor: "border-retro-blue/30",
    bgColor: "bg-retro-blue/5",
  },
  {
    title: "Artists & Creators",
    description: "We want to invest in new artists. Create art, animations, music, or anything creative for the Hexology universe.",
    color: "pink-400",
    borderColor: "border-pink-400/30",
    bgColor: "bg-pink-400/5",
  },
];

export default function HexologyHiring() {
  return (
    <section className="py-20 px-4 border-t border-white/10 bg-gradient-to-b from-zinc-950/50 to-black">
      <div className="max-w-4xl mx-auto">
        {/* Header with mascot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <HexMascot />
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Join the Hexology Community
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We can't promise a lot, but we genuinely want to invest in people.
            If you're excited about building something cool with us, we'd love to have you.
          </p>
        </motion.div>

        {/* Opportunities */}
        <div className="space-y-4">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 border ${opp.borderColor} ${opp.bgColor} hover:bg-opacity-10 transition-all group`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-2 h-2 mt-2 bg-${opp.color} rounded-full flex-shrink-0`}
                     style={{
                       backgroundColor: opp.color === 'retro-green' ? '#00ff41' :
                                       opp.color === 'retro-blue' ? '#00e5ff' : '#f472b6',
                       boxShadow: `0 0 8px ${opp.color === 'retro-green' ? '#00ff41' :
                                             opp.color === 'retro-blue' ? '#00e5ff' : '#f472b6'}50`
                     }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-retro-green transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {opp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-600 text-sm mb-6">
            No experience required. Just enthusiasm and a willingness to learn.
          </p>

          <a
            href="https://discord.gg/hexology"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold hover:bg-retro-green hover:text-black transition-all hover:shadow-[4px_4px_0px_#00ff41] hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127c-.57.345-1.201.643-1.873.893a.076.076 0 0 0-.04.106c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.946-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Say hi on Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
}
