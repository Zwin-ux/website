"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Cute heart mascot matching the hex mascot style
const HeartMascot = () => (
  <svg viewBox="0 0 120 120" className="w-20 h-20 md:w-24 md:h-24">
    {/* Main heart body */}
    <motion.path
      d="M60 25 C60 12, 82 12, 82 32 C82 50, 60 72, 60 72 C60 72, 38 50, 38 32 C38 12, 60 12, 60 25"
      fill="#1a1a2e"
      stroke="#ff6b9d"
      strokeWidth="3"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.03, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 8px rgba(255, 107, 157, 0.5))", transformOrigin: "center" }}
    />

    {/* Left pixel eye */}
    <rect x="47" y="35" width="8" height="8" fill="#ff6b9d" />
    <rect x="49" y="37" width="3" height="3" fill="#ffffff" />

    {/* Right pixel eye */}
    <rect x="65" y="35" width="8" height="8" fill="#ff6b9d" />
    <rect x="67" y="37" width="3" height="3" fill="#ffffff" />

    {/* Cute smile */}
    <motion.path
      d="M 52 50 Q 60 58 68 50"
      fill="none"
      stroke="#ff6b9d"
      strokeWidth="2.5"
      strokeLinecap="round"
    />

    {/* Blush marks */}
    <rect x="38" y="43" width="6" height="4" fill="#00ff41" opacity="0.7" />
    <rect x="76" y="43" width="6" height="4" fill="#00ff41" opacity="0.7" />

    {/* Sparkles */}
    <motion.text x="25" y="22" fill="#ffd93d" fontSize="12" initial={{ opacity: 0.4 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1, repeat: Infinity }}>*</motion.text>
    <motion.text x="90" y="18" fill="#00e5ff" fontSize="10" initial={{ opacity: 0.4 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}>+</motion.text>
    <motion.text x="88" y="65" fill="#ff6b9d" fontSize="10" initial={{ opacity: 0.4 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.1, repeat: Infinity, delay: 0.7 }}>*</motion.text>
  </svg>
);

const suggestions = [
  { label: "Funding", icon: "💰" },
  { label: "Mentorship", icon: "🌱" },
  { label: "Tools", icon: "🛠️" },
  { label: "Community", icon: "👥" },
  { label: "Feedback", icon: "💬" },
  { label: "Collaboration", icon: "🤝" },
  { label: "Commission Work", icon: "💼" },
];

export default function ArtistNeeds() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedSuggestions, setSelectedSuggestions] = useState<string[]>([]);

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestions((prev) =>
      prev.includes(suggestion)
        ? prev.filter((s) => s !== suggestion)
        : [...prev, suggestion]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() || selectedSuggestions.length > 0) {
      console.log({ message, selectedSuggestions });
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="flex justify-center mb-4">
              <HeartMascot />
            </div>
            <div className="inline-block px-3 py-1 border border-pink-400/30 bg-pink-400/5 text-pink-400 text-[10px] font-mono uppercase tracking-[0.3em]">
              FEEDBACK
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase italic tracking-tighter">
              What Do You Need?
            </h2>
            <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest leading-relaxed max-w-xl mx-auto">
              Every artist&apos;s journey is different. Tell us what would help you grow, and we&apos;ll do our best to make it happen.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Quick picks */}
                <div className="space-y-4">
                  <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] text-center">
                    Quick picks (select any that apply)
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {suggestions.map((suggestion) => (
                      <motion.button
                        key={suggestion.label}
                        type="button"
                        onClick={() => handleSuggestionClick(suggestion.label)}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest border transition-all ${
                          selectedSuggestions.includes(suggestion.label)
                            ? "border-retro-green bg-retro-green/10 text-retro-green"
                            : "border-white/20 text-zinc-500 hover:border-white/40 hover:text-white"
                        }`}
                      >
                        <span className="mr-2">{suggestion.icon}</span>
                        {suggestion.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Text input */}
                <div className="space-y-3">
                  <label className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] block text-center">
                    Or tell us in your own words
                  </label>
                  <div className="border border-white/10 bg-zinc-950">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="I'm an illustrator looking to improve my character design skills..."
                      rows={4}
                      className="w-full bg-transparent text-white placeholder-zinc-700 p-4 font-mono text-sm focus:outline-none resize-none"
                    />
                    <div className="border-t border-white/5 px-4 py-2 flex justify-between items-center">
                      <span className="text-zinc-700 font-mono text-[10px] uppercase tracking-widest">
                        {message.length}/500
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={!message.trim() && selectedSuggestions.length === 0}
                    whileTap={{ scale: 0.98 }}
                    className="retro-button text-[10px] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black disabled:hover:shadow-none disabled:hover:transform-none"
                  >
                    SHARE_WITH_US
                  </motion.button>
                </div>

                <p className="text-zinc-700 font-mono text-[10px] uppercase tracking-widest text-center">
                  We read every message. Your voice matters.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6 border border-white/10 bg-zinc-950/50"
              >
                <div className="text-5xl">💚</div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white uppercase italic tracking-tighter">Thank You</h3>
                  <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-widest leading-relaxed max-w-md mx-auto px-4">
                    We&apos;ve heard you. Your input helps us understand how to better support artists like you.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                    setSelectedSuggestions([]);
                  }}
                  className="text-retro-green font-mono text-[10px] uppercase tracking-widest hover:underline"
                >
                  [SUBMIT_ANOTHER]
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom quote */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-l-2 border-white/10 pl-8 py-4"
          >
            <p className="text-lg md:text-xl text-zinc-400 font-mono uppercase tracking-tight leading-relaxed italic">
              &quot;The best way to support <span className="text-white">creators</span> is to simply ask what they <span className="text-white">need</span>.&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
