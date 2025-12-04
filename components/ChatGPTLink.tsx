import React from "react";

export default function ChatGPTLink({ className = "" }: { className?: string }) {
    return (
        <div className={`w-full max-w-3xl mx-auto ${className} space-y-8`}>
            {/* Discord Link */}
            <a
                href="https://discord.gg/Fq4gbktgNJ"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full border-t border-b border-zinc-800 py-8 hover:bg-zinc-900/30 transition-colors duration-500 cursor-pointer no-underline"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4">
                    {/* Left: Serial/Status */}
                    <div className="flex flex-col gap-1 font-mono text-xs text-zinc-600 uppercase tracking-widest">
                        <span>COM.SEC.2025</span>
                        <span className="group-hover:text-zinc-400 transition-colors">Status: Online</span>
                    </div>

                    {/* Center: Main Statement */}
                    <div className="flex-1 text-center w-full md:w-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-300 tracking-tight group-hover:text-white transition-colors duration-300">
                            JOIN THE DISCORD
                        </h2>
                        <p className="mt-2 text-xs md:text-sm text-zinc-500 font-mono uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
                            Official Communication Channel
                        </p>
                    </div>

                    {/* Right: Action/Code */}
                    <div className="flex flex-col items-end gap-1 font-mono text-xs text-zinc-600 uppercase tracking-widest">
                        <span className="group-hover:text-white transition-colors duration-300">ENTER SERVER &rarr;</span>
                        <span>INVITE.ACTIVE</span>
                    </div>
                </div>
            </a>

            {/* ChatGPT Group Chat Link */}
            <a
                href="https://chatgpt.com/gg/v/692d233fedd8819ca5cfcd628d785530?token=JAUBtxFWLkNm1UNSexWPmw"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full border-t border-b border-zinc-800 py-8 hover:bg-zinc-900/30 transition-colors duration-500 cursor-pointer no-underline"
            >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 px-4">
                    {/* Left: Serial/Status */}
                    <div className="flex flex-col gap-1 font-mono text-xs text-zinc-600 uppercase tracking-widest">
                        <span>SYS.REF.2025</span>
                        <span className="group-hover:text-zinc-400 transition-colors">Status: Active</span>
                    </div>

                    {/* Center: Main Statement */}
                    <div className="flex-1 text-center w-full md:w-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-zinc-300 tracking-tight group-hover:text-white transition-colors duration-300">
                            JOIN THE GROUP CHAT
                        </h2>
                        <p className="mt-2 text-xs md:text-sm text-zinc-500 font-mono uppercase tracking-wider group-hover:text-zinc-400 transition-colors">
                            This is the shared layer
                        </p>
                    </div>

                    {/* Right: Action/Code */}
                    <div className="flex flex-col items-end gap-1 font-mono text-xs text-zinc-600 uppercase tracking-widest">
                        <span className="group-hover:text-white transition-colors duration-300">OPEN YOURS &rarr;</span>
                        <span>NO.INVITE.REQ</span>
                    </div>
                </div>
            </a>

            {/* Footer/Disclaimer text */}
            <div className="mt-4 flex justify-between items-center px-4 text-[10px] text-zinc-700 font-mono uppercase tracking-widest">
                <span>Community Access</span>
                <span>Secure Channels</span>
            </div>
        </div>
    );
}
