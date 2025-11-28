"use client";

import { motion } from "framer-motion";

export default function LatticeIcon() {
    return (
        <div className="w-12 h-12 relative flex items-center justify-center">
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current"
            >
                {/* Market Graph Line */}
                <motion.path
                    d="M6 35 L12 28 L18 32 L24 18 L30 24 L36 14 L42 20"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1], opacity: [0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />

                {/* Data Points */}
                <motion.circle
                    cx="12" cy="28" r="2"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.2, repeatDelay: 1 }}
                />
                <motion.circle
                    cx="18" cy="32" r="2"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4, repeatDelay: 1 }}
                />
                <motion.circle
                    cx="24" cy="18" r="2"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6, repeatDelay: 1 }}
                />
                <motion.circle
                    cx="30" cy="24" r="2"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.8, repeatDelay: 1 }}
                />
                <motion.circle
                    cx="36" cy="14" r="2"
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.0, repeatDelay: 1 }}
                />

                {/* Grid Lines */}
                <line x1="6" y1="38" x2="42" y2="38" strokeWidth="0.5" className="opacity-20" />
                <line x1="6" y1="28" x2="42" y2="28" strokeWidth="0.5" className="opacity-20" />
                <line x1="6" y1="18" x2="42" y2="18" strokeWidth="0.5" className="opacity-20" />
            </svg>
        </div>
    );
}
