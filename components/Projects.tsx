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
    <section id="projects" className="py-8 px-4 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
