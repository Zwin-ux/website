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
    <div className="bg-zinc-900 text-white rounded-lg shadow p-5 border border-zinc-800 hover:border-blue-400 transition-all duration-150 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <a href={project.link} target="_blank" rel="noopener noreferrer" title="View on GitHub" className="text-blue-400 hover:text-blue-300">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.096.823 2.21 0 1.595-.015 2.88-.015 3.27 0 .32.217.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-300 text-sm">{project.description}</p>
    </div>
  );
}
