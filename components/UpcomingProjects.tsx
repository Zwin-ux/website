import React from "react";

export default function UpcomingProjects() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        Upcoming Projects
      </h3>
      <p className="text-zinc-400 mb-8 text-center">
        We’re always working on something new and exciting.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Esports Documentary Card */}
        <div className="flex-1 min-w-[260px] max-w-md bg-zinc-900 rounded-2xl p-6 shadow border border-zinc-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-700/20 text-purple-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M8.5 2.5h3a2 2 0 0 1 2 2v.5h1.25A1.25 1.25 0 0 1 16.75 6v7a1.25 1.25 0 0 1-1.25 1.25H13.5V15a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-.75H3.25A1.25 1.25 0 0 1 2 13V6A1.25 1.25 0 0 1 3.25 4.5H5V4.5a2 2 0 0 1 2-2Zm0 0V4.5h3V2.5h-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="font-semibold text-lg text-white">Esports Documentary</span>
          </div>
          <div className="text-zinc-300 text-sm mb-4">
            We’re currently in pre-production for an exclusive documentary following the journey of a rising esports team. Get an inside look at the dedication, strategy, and passion behind the new frontier.
          </div>
          <span className="self-start px-3 py-1 text-xs rounded-full bg-purple-900 text-purple-200 font-semibold">In Production</span>
        </div>
        {/* Artist Collaborations Card */}
        <div className="flex-1 min-w-[260px] max-w-md bg-zinc-900 rounded-2xl p-6 shadow border border-zinc-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-700/20 text-blue-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 0V4m0 6.5v7m0 0H7.5m2.5 0H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="font-semibold text-lg text-white">Artist Collaborations</span>
          </div>
          <div className="text-zinc-300 text-sm mb-4">
            Partnering with talented artists to bring innovative digital experiences to life. We provide the technical expertise to transform creative visions into interactive realities.
          </div>
          <span className="self-start px-3 py-1 text-xs rounded-full bg-blue-900 text-blue-200 font-semibold">Ongoing</span>
        </div>
      </div>
    </section>
  );
}
