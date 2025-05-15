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
    <div className="bg-black text-white rounded-xl shadow-lg p-6 mb-8 border border-gray-800 hover:shadow-2xl transition duration-200 fade-in-section">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="mb-3 text-gray-300">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-gray-700 text-xs px-2 py-1 rounded font-mono">#{tag}</span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-blue-400 hover:underline font-medium"
      >
        View Project
      </a>
    </div>
  );
}
