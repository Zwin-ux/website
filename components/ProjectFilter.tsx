"use client";

import React, { useState } from "react";
import type { ProjectCategory } from "../data/projects";
import { projects, categories } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectFilter() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActive("All")}
          className={`text-sm px-3 py-1.5 rounded transition-colors ${
            active === "All"
              ? "bg-accent text-white"
              : "bg-zinc-800 text-zinc-400 hover:text-foreground"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`text-sm px-3 py-1.5 rounded transition-colors ${
              active === cat
                ? "bg-accent text-white"
                : "bg-zinc-800 text-zinc-400 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
