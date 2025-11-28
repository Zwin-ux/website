"use client";

import { motion } from "framer-motion";

export default function BotIcon() {
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
                {/* Bot Head */}
                <motion.rect
                    x="14"
                    y="16"
                    width="20"
                    height="18"
                    rx="3"
                    strokeWidth="1.5"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Antenna */}
                <motion.line
                    x1="24"
                    y1="16"
                    x2="24"
                    y2="10"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />

                {/* Antenna Tip */}
                <motion.circle
                    cx="24"
                    cy="10"
                    r="2"
                    fill="currentColor"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Left Eye */}
                <motion.circle
                    cx="19"
                    cy="24"
                    r="2"
                    fill="currentColor"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Right Eye */}
                <motion.circle
                    cx="29"
                    cy="24"
                    r="2"
                    fill="currentColor"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Mouth/Chat Line */}
                <motion.path
                    d="M18 30 Q24 32 30 30"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
