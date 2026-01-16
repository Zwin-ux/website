"use client";

import React from "react";
import { useVisitorTracker } from "../lib/visitorTracker";

export default function VisitorTicker() {
  const { visitorId, visitorCount, isReturning } = useVisitorTracker();

  if (!visitorId) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black border-t border-retro-green/20 z-50 py-1 overflow-hidden pointer-events-none">
        {/* Helper text overlay (static) */}
        <div className="absolute left-0 top-0 bottom-0 bg-black/80 px-4 flex items-center z-10 border-r border-retro-green/20">
             <div className="w-2 h-2 bg-retro-green rounded-full animate-pulse mr-2"></div>
             <span className="text-[10px] font-mono text-retro-green uppercase tracking-widest">
                 {isReturning ? `WELCOME BACK, OPERATOR` : `NEW SIGNAL DETECTED`}
             </span>
        </div>

        {/* Scrolling Ticker */}
        <div className="whitespace-nowrap animate-ticker flex items-center gap-12 text-[10px] font-mono text-zinc-500 uppercase tracking-widest opacity-80">
             {/* Duplicate items for seamless scroll */}
             {[...Array(4)].map((_, i) => (
                 <React.Fragment key={i}>
                     <span>SYSTEM_STATUS: ONLINE</span>
                     <span>VISITOR_COUNT: <span className="text-retro-green">{visitorCount}</span></span>
                     <span>YOUR_ID: <span className="text-white">{visitorId}</span></span>
                     <span>ENCRYPTION: ENABLED</span>
                     <span>NODE_ACCESS: GRANTED</span>
                     <span>REGION: UNKNOWN</span>
                 </React.Fragment>
             ))}
        </div>

        <style jsx>{`
            @keyframes ticker {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-ticker {
                animation: ticker 40s linear infinite;
                /* Offset efficiently based on the width of the static overlay */
                padding-left: 220px; 
            }
        `}</style>
    </div>
  );
}
