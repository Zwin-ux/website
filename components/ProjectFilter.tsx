"use client";

import React, { useState } from "react";
import type { ProjectStatus } from "../data/projects";
import { projects, statuses, tags } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectFilter() {
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "All">("All");
  const [activeTag, setActiveTag] = useState<string | "All">("All");

  const filtered = projects.filter((project) => {
    const statusMatch = activeStatus === "All" || project.status === activeStatus;
    const tagMatch = activeTag === "All" || project.tags.includes(activeTag);
    return statusMatch && tagMatch;
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveStatus("All")}
          className={`text-sm px-3 py-1.5 rounded transition-colors ${
            activeStatus === "All"
              ? "bg-accent text-white"
              : "bg-zinc-800 text-zinc-400 hover:text-foreground"
          }`}
        >
          All
        </button>
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatus(status)}
            className={`text-sm px-3 py-1.5 rounded transition-colors ${
              activeStatus === status
                ? "bg-accent text-white"
                : "bg-zinc-800 text-zinc-400 hover:text-foreground"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag("All")}
          className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
            activeTag === "All"
              ? "bg-zinc-100 text-zinc-900"
              : "bg-zinc-900 text-zinc-400 hover:text-foreground"
          }`}
        >
          All tags
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
              activeTag === tag
                ? "bg-zinc-100 text-zinc-900"
                : "bg-zinc-900 text-zinc-400 hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
