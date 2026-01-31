"use client";

import React from "react";
import { skillGroups } from "../../data/skills";
import { getFeaturedProjects } from "../../data/projects";

export default function ResumePage() {
  const topProjects = getFeaturedProjects();

  return (
    <div className="py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold">Bonelli</h1>
            <p className="text-zinc-400 mt-1">Software Engineer</p>
          </div>
          <button
            onClick={() => window.print()}
            className="no-print text-sm px-4 py-2 border border-zinc-700 text-zinc-300 hover:text-foreground hover:border-zinc-500 transition-colors rounded"
          >
            Print / Save PDF
          </button>
        </div>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-zinc-800 pb-2">
            Summary
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Software engineer with experience building full-stack web
            applications, AI/ML systems, and developer tools. Focused on
            TypeScript/React ecosystems and Python ML pipelines. Ships tested,
            documented, production-ready code. U.S. Citizen, clearance eligible.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-zinc-800 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-zinc-400 mb-1">
                  {group.category}
                </h3>
                <p className="text-sm text-zinc-300">
                  {group.skills.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Projects */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-zinc-800 pb-2">
            Selected Projects
          </h2>
          <div className="space-y-5">
            {topProjects.map((project) => (
              <div key={project.slug}>
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold">{project.title}</h3>
                  <span className="text-xs text-zinc-500 font-mono shrink-0">
                    {project.tags.slice(0, 3).join(", ")}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-1">{project.summary}</p>
                <ul className="mt-2 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-zinc-500 pl-4 relative">
                      <span className="absolute left-0">-</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3 border-b border-zinc-800 pb-2">
            Education
          </h2>
          <p className="text-sm text-zinc-500 italic">Details to be added.</p>
        </section>
      </div>
    </div>
  );
}
