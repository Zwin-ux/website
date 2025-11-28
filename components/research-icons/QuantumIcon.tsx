"use client";

import { motion } from "framer-motion";

export default function QuantumIcon() {
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
                {/* Central "Particle" */}
                <motion.circle
                    cx="24"
                    cy="24"
                    r="3"
                    fill="currentColor"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: [1, 0, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Left Ghost Particle (Superposition) */}
                <motion.circle
                    cx="24"
                    cy="24"
                    r="2.5"
                    strokeWidth="1.5"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: [-12, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                />

                {/* Right Ghost Particle (Superposition) */}
                <motion.circle
                    cx="24"
                    cy="24"
                    r="2.5"
                    strokeWidth="1.5"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: [12, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
                />

                {/* Wave Function Interference Pattern */}
                <motion.path
                    d="M8 24C12 16 16 32 24 24C32 16 36 32 40 24"
                    strokeWidth="1"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.5, 0.5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                />
            </svg>
        </div>
    );
}
