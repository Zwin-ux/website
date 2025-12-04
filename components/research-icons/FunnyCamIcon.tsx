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
                    x="8"
                    y="14"
                    width="32"
                    height="24"
                    rx="4"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Camera Lens */}
                <motion.circle
                    cx="24"
                    cy="26"
                    r="8"
                    strokeWidth="1.5"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "backOut" }}
                />

                {/* Inner Lens / Iris */}
                <motion.circle
                    cx="24"
                    cy="26"
                    r="3"
                    strokeWidth="1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />

                {/* Flash / Sensor Node */}
                <motion.circle
                    cx="34"
                    cy="19"
                    r="1.5"
                    strokeWidth="1.5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                />

                {/* Top Button / Shutter */}
                <motion.path
                    d="M14 14V11C14 10.4477 14.4477 10 15 10H20"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                />

                {/* Scanning Line Effect */}
                <motion.path
                    d="M12 26H36"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: [0, 0.5, 0], x: [0, 0, 0] }} // Subtle static or just appear
                    transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    style={{ display: 'none' }} // Decided to keep it clean for now, maybe enable if needed
                />

                {/* "AI" Sparkles/Nodes around */}
                <motion.circle
                    cx="38"
                    cy="12"
                    r="1"
                    fill="currentColor"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                />
                <motion.circle
                    cx="10"
                    cy="36"
                    r="1"
                    fill="currentColor"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
                />

            </svg>
        </div>
    );
}
