"use client";

import { motion } from "framer-motion";

export default function FunnyCamIcon() {
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
                {/* Camera Body */}
                <motion.rect
                    x="6"
                    y="14"
                    width="36"
                    height="24"
                    rx="4"
                    strokeWidth="1.5"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Lens */}
                <motion.circle
                    cx="24"
                    cy="26"
                    r="8"
                    strokeWidth="1.5"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                />

                {/* Shutter Button */}
                <rect x="32" y="10" width="6" height="4" rx="1" strokeWidth="1.5" />

                {/* Flash / Sensor */}
                <motion.circle
                    cx="36"
                    cy="19"
                    r="1.5"
                    fill="currentColor"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 1] }}
                />

                {/* "Funny" Element - A little smile or glitch */}
                <motion.path
                    d="M20 28 C 20 28, 24 32, 28 28"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
            </svg>
        </div>
    );
}
