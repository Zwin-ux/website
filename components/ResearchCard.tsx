import React, { ReactNode } from "react";

interface ResearchCardProps {
    title: string;
    description: string;
    href?: string;
    icon: ReactNode;
}

export default function ResearchCard({
    title,
    description,
    href,
    icon,
}: ResearchCardProps) {
    const content = (
        <>
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-white/90 transition-colors">
                            {title}
                        </h3>
                        {/* External Link Arrow - only show if href exists */}
                        {href && (
                            <svg
                                className="w-4 h-4 text-white/30 group-hover:text-white/70 transition-colors transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        )}
                    </div>
                    <p className="text-white/50 leading-relaxed text-sm md:text-base max-w-xl group-hover:text-white/60 transition-colors">
                        {description}
                    </p>
                </div>

                {/* Animated Icon Container */}
                <div className="flex-shrink-0 text-white/80 group-hover:text-white transition-colors duration-500">
                    {icon}
                </div>
            </div>
        </>
    );

    // If href is provided, render as clickable link
    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-black rounded-xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer block overflow-hidden"
            >
                {content}
            </a>
        );
    }

    // Otherwise, render as non-clickable div
    return (
        <div className="group relative bg-black rounded-xl p-8 md:p-10 border border-white/10 hover:border-white/20 transition-all duration-500 block overflow-hidden">
            {content}
        </div>
    );
}
