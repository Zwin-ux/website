"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  projects,
  getFeaturedProjects,
  tags as projectTags,
  statuses,
  type Project,
  type ProjectStatus,
} from "../data/projects";
import { designTokens } from "../lib/designTokens";

const grainDataUrl =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E";

const spotlightDefaults = {
  x: "50%",
  y: "20%",
};

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function ValveMotif({ accent }: { accent: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-10 w-10"
    >
      <circle cx="32" cy="32" r="18" fill="none" stroke={accent} strokeWidth="2" />
      <circle cx="32" cy="32" r="6" fill={accent} opacity="0.8" />
      <path
        d="M32 10v12M32 42v12M10 32h12M42 32h12"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProjectActions({
  project,
  stopPropagation = false,
}: {
  project: Project;
  stopPropagation?: boolean;
}) {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (stopPropagation) {
      event.stopPropagation();
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      {project.links.demo ? (
        <a
          href={project.links.demo}
          target="_blank"
          rel="noreferrer"
          onClick={handleClick}
          className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-900 transition hover:translate-y-[-1px] hover:bg-zinc-200"
        >
          Demo
        </a>
      ) : (
        <span
          aria-disabled="true"
          className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-500"
        >
          Demo coming back
        </span>
      )}
      <a
        href={project.links.github}
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-100 transition hover:border-zinc-400"
      >
        Code
      </a>
    </div>
  );
}

function FeaturedCapsule({
  project,
  expanded,
  onToggle,
  reducedMotion,
}: {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
  reducedMotion: boolean;
}) {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (reducedMotion || !tiltRef.current) return;
      const rect = tiltRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateX = ((y / rect.height) * 12 - 6).toFixed(2);
      const rotateY = (((x / rect.width) * 12 - 6) * -1).toFixed(2);
      tiltRef.current.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    },
    [reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  }, []);

  return (
    <div
      ref={tiltRef}
      role="button"
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseLeave}
      className="group relative min-w-[280px] snap-start rounded-[32px] border border-white/10 bg-zinc-950/60 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:min-w-[420px]"
      style={{
        borderColor: `${project.accent}55`,
        boxShadow: `0 30px 60px rgba(0,0,0,0.35), 0 0 60px ${project.accent}22`,
      }}
      aria-expanded={expanded}
    >
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      <div className="relative z-10 flex h-full flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{project.highlight}</p>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          {project.id === "keegan" ? (
            <div className="rounded-full border border-white/10 p-2">
              <ValveMotif accent={project.accent} />
            </div>
          ) : (
            <span
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
              style={{ color: project.accent }}
            >
              {project.status}
            </span>
          )}
        </div>
        <p className="text-sm text-zinc-300">{project.oneLiner}</p>
        <div
          className={`overflow-hidden text-sm text-zinc-400 transition-all duration-300 ${
            expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p>{project.description}</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-500">
            <span className="rounded-full border border-white/10 px-3 py-1">{project.role}</span>
            <span className="rounded-full border border-white/10 px-3 py-1">{project.year}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-zinc-400 transition group-hover:-translate-y-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
        <ProjectActions project={project} stopPropagation />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative flex h-full flex-col gap-4 rounded-[20px] border border-white/10 bg-zinc-950/70 p-5 transition hover:-translate-y-1"
      style={{ borderColor: `${project.accent}35` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{project.status}</p>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-400">
          {project.year}
        </span>
      </div>
      <p className="text-sm text-zinc-300">{project.oneLiner}</p>
      <p className="text-sm text-zinc-500">{project.description}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-zinc-400 transition group-hover:-translate-y-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-2">
        <ProjectActions project={project} />
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const reducedMotion = useReducedMotion();
  const [activeTag, setActiveTag] = useState<string | "All">("All");
  const [activeStatus, setActiveStatus] = useState<ProjectStatus | "All">("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const featuredProjects = useMemo(() => getFeaturedProjects(), []);
  const spotlightProject = useMemo(
    () => projects.find((project) => project.id === "keegan") ?? featuredProjects[0],
    [featuredProjects]
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const statusMatch = activeStatus === "All" || project.status === activeStatus;
      const tagMatch = activeTag === "All" || project.tags.includes(activeTag);
      return statusMatch && tagMatch;
    });
  }, [activeStatus, activeTag]);

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !spotlightRef.current) return;
    const rect = spotlightRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      if (!spotlightRef.current) return;
      spotlightRef.current.style.setProperty("--spotlight-x", `${x}px`);
      spotlightRef.current.style.setProperty("--spotlight-y", `${y}px`);
    });
  }, [reducedMotion]);

  return (
    <section id="projects" className="px-6">
      <div
        ref={spotlightRef}
        onPointerMove={handlePointerMove}
        className="relative mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden rounded-[32px] border border-white/5 bg-zinc-950/40 px-6 py-10"
        style={{
          borderRadius: designTokens.radius.capsule,
          boxShadow: designTokens.shadow.capsule,
          backgroundImage: `radial-gradient(700px circle at var(--spotlight-x, ${spotlightDefaults.x}) var(--spotlight-y, ${spotlightDefaults.y}), rgba(244,114,182,0.08), transparent 65%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url(${grainDataUrl})`,
            opacity: designTokens.grainOpacity,
          }}
        />
        <div className="relative z-10 flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">Projects</p>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white">Project Capsules</h2>
              <p className="max-w-2xl text-sm text-zinc-400">
                A curated runway of experiments, shipped systems, and research-forward builds.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <span className="rounded-full border border-white/10 px-3 py-1">Fast build</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Credible outcomes</span>
            </div>
          </div>
        </div>

        {spotlightProject && (
          <div className="relative z-10 grid gap-6 rounded-[24px] border border-white/10 bg-zinc-950/80 p-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Featured Project</p>
              <h3 className="text-2xl font-semibold text-white">{spotlightProject.title}</h3>
              <p className="text-sm text-zinc-300">{spotlightProject.oneLiner}</p>
              <p className="text-sm text-zinc-500">{spotlightProject.description}</p>
              <div className="flex flex-wrap gap-2">
                {spotlightProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-wide text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ProjectActions project={spotlightProject} />
            </div>
            <div className="relative flex flex-col justify-between gap-4 rounded-[20px] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Status</span>
                <span
                  className="rounded-full border border-white/10 px-3 py-1 text-xs"
                  style={{ color: spotlightProject.accent }}
                >
                  {spotlightProject.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">Metrics</span>
                <span className="text-xs text-zinc-400">
                  {spotlightProject.metrics?.latency ?? "Realtime"}
                </span>
              </div>
              {spotlightProject.id === "keegan" && (
                <div className="flex items-center justify-center rounded-[16px] border border-white/10 bg-black/30 p-4">
                  <ValveMotif accent={spotlightProject.accent} />
                </div>
              )}
            </div>
          </div>
        )}

        <div className="relative z-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4" aria-label="Featured projects">
          {featuredProjects.map((project) => (
            <FeaturedCapsule
              key={project.id}
              project={project}
              expanded={expandedId === project.id}
              onToggle={() =>
                setExpandedId((current) => (current === project.id ? null : project.id))
              }
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">All Projects</h3>
              <p className="text-sm text-zinc-500">Filter by focus and stage.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveStatus("All")}
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                  activeStatus === "All"
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-white/10 text-zinc-500 hover:text-white"
                }`}
                aria-pressed={activeStatus === "All"}
              >
                All status
              </button>
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveStatus(status)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                    activeStatus === status
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-white/10 text-zinc-500 hover:text-white"
                  }`}
                  aria-pressed={activeStatus === status}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTag("All")}
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                activeTag === "All"
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/10 text-zinc-500 hover:text-white"
              }`}
              aria-pressed={activeTag === "All"}
            >
              All tags
            </button>
            {projectTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                  activeTag === tag
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-white/10 text-zinc-500 hover:text-white"
                }`}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
