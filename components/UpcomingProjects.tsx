import React from "react";

export default function UpcomingProjects() {
  return (
    <section className="mb-12">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
        Current Projects
      </h3>
      <p className="text-zinc-400 mb-8 text-center">
        I'm always working on something new and exciting.
      </p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Creative Collaborations Card - Updated for freelance context */}
        <div className="flex-1 min-w-[260px] max-w-md bg-zinc-900 rounded-2xl p-6 shadow border border-zinc-800 flex flex-col">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-700/20 text-blue-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 2.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0 0V4m0 6.5v7m0 0H7.5m2.5 0H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="font-semibold text-lg text-white">Creative Collaborations</span>
          </div>
          <div className="text-zinc-300 text-sm mb-4">
            Working with talented artists and creators to bring innovative digital experiences to life. I provide the technical expertise to transform creative visions into interactive web applications and digital platforms.
          </div>
          <span className="self-start px-3 py-1 text-xs rounded-full bg-blue-900 text-blue-200 font-semibold">Ongoing</span>
        </div>
      </div>
    </section>
  );
}