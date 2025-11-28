"use client";

import { motion } from "framer-motion";

export default function HexologyIcon() {
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
                {/* Center Hexagon */}
                <motion.path
                    d="M24 10 L32 15 L32 25 L24 30 L16 25 L16 15 Z"
                    strokeWidth="1.5"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Top Left Hexagon */}
                <motion.path
                    d="M12 6 L16 8 L16 12 L12 14 L8 12 L8 8 Z"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />

                {/* Top Right Hexagon */}
                <motion.path
                    d="M36 6 L40 8 L40 12 L36 14 L32 12 L32 8 Z"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Bottom Left Hexagon */}
                <motion.path
                    d="M12 26 L16 28 L16 32 L12 34 L8 32 L8 28 Z"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />

                {/* Bottom Right Hexagon */}
                <motion.path
                    d="M36 26 L40 28 L40 32 L36 34 L32 32 L32 28 Z"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Connecting Lines */}
                <motion.line
                    x1="16" y1="15" x2="12" y2="14"
                    strokeWidth="0.5"
                    className="opacity-30"
                />
                <motion.line
                    x1="32" y1="15" x2="36" y2="14"
                    strokeWidth="0.5"
                    className="opacity-30"
                />
            </svg>
        </div>
    );
}
