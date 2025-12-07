
import React from 'react';

export default function MazenComeback() {
    return (
        <div className="w-full bg-[#e3a857] py-24 border-y-8 border-[#3e2723] font-sans selection:bg-[#3e2723] selection:text-[#e3a857] relative overflow-hidden">
            {/* Grain overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

                <div className="flex flex-col items-center">
                    <span className="text-[#3e2723] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 border-b-2 border-[#3e2723] pb-1">
                        Coming Also...
                    </span>

                    <h2 className="text-5xl md:text-7xl font-black text-[#5C2E08] uppercase tracking-[-0.05em] mb-4 drop-shadow-sm leading-[0.9]" style={{ fontFamily: 'Futura, "Century Gothic", "Tw Cen MT", sans-serif' }}>
                        The Great<br />Mazen Comeback
                    </h2>

                    <div className="flex items-center justify-center gap-6 mt-6 w-full">
                        <div className="h-[2px] bg-[#3e2723] flex-grow max-w-[100px]" />
                        <div className="flex flex-col items-center">
                            <span className="text-[#fffdd0] bg-[#3e2723] px-3 py-1 font-bold text-xs tracking-widest uppercase">
                                Will be livestreamed Dec 25th
                            </span>
                        </div>
                        <div className="h-[2px] bg-[#3e2723] flex-grow max-w-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
