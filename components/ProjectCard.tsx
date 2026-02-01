import React from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <a 
          href={project.live || project.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/title"
        >
          <h3 className="font-semibold text-foreground group-hover/title:text-accent transition-colors flex items-center gap-1.5">
            {project.title}
            <svg className="w-3.5 h-3.5 opacity-0 group-hover/title:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </h3>
        </a>
        <span className="shrink-0 text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
          {project.category}
        </span>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed mb-4">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 font-mono"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 text-sm">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent text-black font-medium hover:bg-accent/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Live Demo
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
