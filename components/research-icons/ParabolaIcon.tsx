"use client";

import { motion } from "framer-motion";

export default function ParabolaIcon() {
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
                {/* Parabolic Curve */}
                <path
                    d="M8 8C8 8 24 48 40 8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="opacity-50"
                    style={{
                        offsetPath: "path('M8 8C8 8 24 48 40 8')",
                    }}
                />

                {/* Scanning Point */}
                <motion.circle
                    r="3"
                    fill="currentColor"
                    animate={{ offsetDistance: ["0%", "100%", "0%"] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{
                        offsetPath: "path('M8 8C8 8 24 48 40 8')",
                    }}
                />

                {/* Tangent Line (Visualized as a small line moving with the point) */}
                {/* Note: offset-rotate auto is default, so a line should follow the curve tangent */}
                <motion.line
                    x1="-6" y1="0" x2="6" y2="0"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ opacity: 0 }}
                    animate={{ offsetDistance: ["0%", "100%", "0%"], opacity: [0, 1, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.5, 1]
                    }}
                    style={{
                        offsetPath: "path('M8 8C8 8 24 48 40 8')",
                    }}
                />
            </svg>
        </div>
    );
}
