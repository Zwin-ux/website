import type { Metadata } from "next";
import ProjectFilter from "../../components/ProjectFilter";

export const metadata: Metadata = {
  title: "Projects — Bonelli.dev",
  description:
    "Software engineering projects spanning AI/ML, full-stack web, systems, and research.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-400 mb-10">
          A selection of shipped projects across AI/ML, web, systems, and
          research.
        </p>
        <ProjectFilter />
      </div>
    </div>
  );
}
