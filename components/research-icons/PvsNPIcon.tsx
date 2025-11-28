"use client";

import { motion } from "framer-motion";

export default function PvsNPIcon() {
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
                {/* Central Node */}
                <motion.circle
                    cx="24"
                    cy="40"
                    r="3"
                    strokeWidth="2"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Left Branch */}
                <motion.path
                    d="M24 37L14 24"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
                />
                <motion.circle
                    cx="14"
                    cy="24"
                    r="2.5"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, times: [0.3, 0.4, 0.6, 0.7] }}
                />

                {/* Right Branch */}
                <motion.path
                    d="M24 37L34 24"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5, times: [0, 0.4, 0.6, 1] }}
                />
                <motion.circle
                    cx="34"
                    cy="24"
                    r="2.5"
                    strokeWidth="1.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.5, times: [0.3, 0.4, 0.6, 0.7] }}
                />

                {/* Top Sub-branches (Complexity) */}
                <motion.path
                    d="M14 21.5L8 12"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1, times: [0, 0.4, 0.6, 1] }}
                />
                <motion.circle
                    cx="8"
                    cy="12"
                    r="2"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1, times: [0.3, 0.4, 0.6, 0.7] }}
                />

                <motion.path
                    d="M34 21.5L40 12"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5, times: [0, 0.4, 0.6, 1] }}
                />
                <motion.circle
                    cx="40"
                    cy="12"
                    r="2"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1.5, times: [0.3, 0.4, 0.6, 0.7] }}
                />
            </svg>
        </div>
    );
}
