import React from "react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Quantum Signals",
    description: "Interactive Quantum Mechanics Learning",
    tags: ["quantum", "education"],
    link: "https://zwin-ux.github.io/quantum/",
  },
  {
    title: "Echo Markets",
    description: "A fake stock market MMO",
    tags: ["game", "chaos"],
    link: "https://github.com/Zwin-ux/echo-markets",
  },
  {
    title: "Rubrix",
    description: "Chrome Extension Utility App",
    tags: ["chrome", "extension"],
    link: "https://github.com/Zwin-ux/Rubrix",
  },
  {
    title: "Sputnik",
    description: "A Hierarchical Adaptive Token Distillation Test Bed",
    tags: ["AI", "research"],
    link: "https://github.com/Zwin-ux/Sputnik-",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-white tracking-tight">
          Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
