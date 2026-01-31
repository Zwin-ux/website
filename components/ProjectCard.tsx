import React from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border border-zinc-800 rounded-lg p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-foreground">{project.title}</h3>
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
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
}
