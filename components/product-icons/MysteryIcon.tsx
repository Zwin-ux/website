"use client";

import { motion } from "framer-motion";

export default function MysteryIcon() {
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
                {/* Question Mark */}
                <motion.path
                    d="M20 16C20 14 22 12 24 12C26 12 28 14 28 16C28 18 26 19 24 20V24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />

                {/* Dot */}
                <motion.circle
                    cx="24"
                    cy="30"
                    r="2"
                    fill="currentColor"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 1], opacity: [0, 1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1.5, repeatDelay: 1 }}
                />

                {/* Pulsing Glow Ring */}
                <motion.circle
                    cx="24"
                    cy="24"
                    r="18"
                    strokeWidth="1"
                    initial={{ scale: 0.8, opacity: 0.3 }}
                    animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Inner Glow Ring */}
                <motion.circle
                    cx="24"
                    cy="24"
                    r="14"
                    strokeWidth="0.5"
                    initial={{ scale: 0.9, opacity: 0.2 }}
                    animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.05, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
            </svg>
        </div>
    );
}
