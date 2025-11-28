"use client";

import { motion } from "framer-motion";

export default function GodelIcon() {
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
                {/* Outer Rotating Square */}
                <motion.rect
                    x="12"
                    y="12"
                    width="24"
                    height="24"
                    rx="2"
                    strokeWidth="1.5"
                    initial={{ rotate: 0, opacity: 0.8 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Counter-Rotating Diamond */}
                <motion.rect
                    x="18"
                    y="18"
                    width="12"
                    height="12"
                    rx="1"
                    strokeWidth="1.5"
                    initial={{ rotate: 45, opacity: 0.6 }}
                    animate={{ rotate: -315 }} // 45 - 360
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Center Dot (Self-reference point) */}
                <motion.circle
                    cx="24"
                    cy="24"
                    r="1.5"
                    fill="currentColor"
                    initial={{ scale: 0.8, opacity: 0.5 }}
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
