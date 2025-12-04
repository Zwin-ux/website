import React from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  external?: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-black rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 block overflow-hidden"
    >
      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col h-full justify-between gap-4">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
              {project.title}
            </h3>
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
          </div>
          <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
