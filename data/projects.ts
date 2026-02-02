export type ProjectStatus = "Alpha" | "Beta" | "Live" | "WIP";

export interface ProjectLinks {
  demo?: string;
  github: string;
}

export interface ProjectMedia {
  image?: string;
  video?: string;
}

export interface ProjectMetrics {
  users?: string;
  latency?: string;
  stars?: string;
}

export interface Project {
  id: string;
  title: string;
  oneLiner: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  year: number;
  role: string;
  tech: string[];
  links: ProjectLinks;
  highlight: string;
  accent: string;
  media: ProjectMedia;
  metrics?: ProjectMetrics;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "keegan",
    title: "Keegan",
    oneLiner: "Open valve to a cool world. AI radio style experience.",
    description:
      "Keegan is an alpha-stage, realtime audio experimentation lab that turns prompts into a live radio-style stream. It focuses on fast iteration, playful sound design, and tight system performance.",
    tags: ["audio", "realtime", "systems", "web", "experimentation"],
    status: "Alpha",
    year: 2024,
    role: "Founder & Engineer",
    tech: ["TypeScript", "Next.js", "OpenAI", "Web Audio"],
    links: {
      github: "https://github.com/Zwin-ux/Keegan",
    },
    highlight: "Featured alpha build",
    accent: "#f97316",
    media: {},
    metrics: {
      latency: "sub-300ms",
      stars: "1.2k",
    },
    featured: true,
  },
  {
    id: "sunny",
    title: "Sunny",
    oneLiner: "Adaptive AI teaching workflows with real-time feedback loops.",
    description:
      "Sunny delivers AI-powered lesson generation with instant feedback so students can iterate quickly and educators can track momentum.",
    tags: ["ai", "education", "web"],
    status: "Live",
    year: 2024,
    role: "Founder & Engineer",
    tech: ["Next.js", "TypeScript", "OpenAI", "Supabase"],
    links: {
      demo: "https://sunny-phi-two.vercel.app/",
      github: "https://github.com/Zwin-ux/sunny",
    },
    highlight: "Shipping in classrooms",
    accent: "#38bdf8",
    media: {},
    featured: true,
  },
  {
    id: "hexology",
    title: "Hexology",
    oneLiner: "Online multiplayer Hex with matchmaking and live ELO.",
    description:
      "Hexology is a realtime board game experience with competitive matchmaking and ranking to keep the ladder active.",
    tags: ["games", "multiplayer", "web"],
    status: "Live",
    year: 2023,
    role: "Lead Engineer",
    tech: ["TypeScript", "React"],
    links: {
      demo: "https://hexology.me",
      github: "https://github.com/Zwin-ux/hexology",
    },
    highlight: "Live ladder play",
    accent: "#a78bfa",
    media: {},
    featured: true,
  },
  {
    id: "parabola",
    title: "Parabola",
    oneLiner: "Trajectory-based inference experiments for applied research.",
    description:
      "Parabola explores experimental inference paths, optimizing for interpretability while keeping training cost manageable.",
    tags: ["research", "ai", "ml"],
    status: "Beta",
    year: 2024,
    role: "Research Engineer",
    tech: ["Python", "PyTorch"],
    links: {
      demo: "https://parabola-sand.vercel.app/",
      github: "https://github.com/Zwin-ux/parabola",
    },
    highlight: "New inference paths",
    accent: "#22d3ee",
    media: {},
    featured: true,
  },
  {
    id: "godel",
    title: "Gödel",
    oneLiner: "Self-referential logic engine for theorem proving.",
    description:
      "Gödel explores automated reasoning by building proof chains with a self-referential logic core.",
    tags: ["research", "logic", "ai"],
    status: "Beta",
    year: 2023,
    role: "Research Engineer",
    tech: ["Python", "Logic"],
    links: {
      demo: "https://zwin-ux.github.io/godel/",
      github: "https://github.com/Zwin-ux/godel",
    },
    highlight: "Proof automation",
    accent: "#f472b6",
    media: {},
    featured: true,
  },
  {
    id: "botbot",
    title: "BotBot",
    oneLiner: "AI agent orchestration with memory and tooling.",
    description:
      "A lightweight agent framework for orchestrating multi-step tasks with tool use, memory, and Dockerized deployments.",
    tags: ["ai", "agents", "systems"],
    status: "WIP",
    year: 2024,
    role: "Engineer",
    tech: ["Next.js", "Docker", "GitHub Actions"],
    links: {
      github: "https://github.com/Zwin-ux/botbot",
    },
    highlight: "Tool-first agents",
    accent: "#34d399",
    media: {},
    featured: false,
  },
  {
    id: "realtext",
    title: "RealText",
    oneLiner: "Realtime AI-content detection inside the browser.",
    description:
      "Chrome extension that flags AI-generated content in the moment using classifier models tuned for speed.",
    tags: ["ai", "browser", "ml"],
    status: "Beta",
    year: 2023,
    role: "Engineer",
    tech: ["TypeScript", "React", "Jest"],
    links: {
      github: "https://github.com/Zwin-ux/realtext",
    },
    highlight: "Realtime detection",
    accent: "#fb7185",
    media: {},
    featured: false,
  },
  {
    id: "catalyst",
    title: "Catalyst",
    oneLiner: "Modular Discord bot engine with plugin architecture.",
    description:
      "A plugin-ready Discord bot framework with persistent state management and extensible command routing.",
    tags: ["systems", "infra", "community"],
    status: "Live",
    year: 2022,
    role: "Engineer",
    tech: ["TypeScript", "PostgreSQL", "Jest"],
    links: {
      github: "https://github.com/Zwin-ux/catalyst",
    },
    highlight: "Plugin-ready",
    accent: "#60a5fa",
    media: {},
    featured: false,
  },
  {
    id: "funny-cam",
    title: "Funny Cam",
    oneLiner: "Realtime webcam filters with CV pipelines.",
    description:
      "Browser-based computer vision filters that let users remix their webcam feed in realtime.",
    tags: ["web", "cv", "media"],
    status: "Live",
    year: 2022,
    role: "Engineer",
    tech: ["React", "OpenCV", "TypeScript"],
    links: {
      demo: "https://quick-jw3c.onrender.com/",
      github: "https://github.com/Zwin-ux/funny-cam",
    },
    highlight: "Realtime CV",
    accent: "#facc15",
    media: {},
    featured: false,
  },
  {
    id: "rubrix",
    title: "Rubrix",
    oneLiner: "Social trading MMO with market simulation.",
    description:
      "Rubrix is a stock-market MMO built around social trading mechanics and realtime market events.",
    tags: ["games", "economy", "web"],
    status: "WIP",
    year: 2023,
    role: "Engineer",
    tech: ["TypeScript", "React", "Supabase"],
    links: {
      github: "https://github.com/Zwin-ux/Rubrix",
    },
    highlight: "Social trading",
    accent: "#f59e0b",
    media: {},
    featured: false,
  },
  {
    id: "eidolon",
    title: "Eidolon",
    oneLiner: "Local LLM interface with fast model switching.",
    description:
      "A local-first LLM interface with conversation history, model switching, and lightweight storage.",
    tags: ["ai", "local", "tools"],
    status: "Beta",
    year: 2023,
    role: "Engineer",
    tech: ["Python", "PyTorch", "Transformers"],
    links: {
      github: "https://github.com/Zwin-ux/eidolon",
    },
    highlight: "Local-first",
    accent: "#a3e635",
    media: {},
    featured: false,
  },
];

export const tags = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

export const statuses: ProjectStatus[] = Array.from(
  new Set(projects.map((project) => project.status))
).sort() as ProjectStatus[];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
