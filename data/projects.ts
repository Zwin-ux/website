export type ProjectCategory = "AI/ML" | "Web" | "Systems" | "Research" | "Games";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  github: string;
  live?: string;
  featured: boolean;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "sunny",
    title: "Sunny",
    summary: "AI-powered teaching platform with adaptive lesson generation and real-time student feedback.",
    category: "AI/ML",
    tags: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Vitest"],
    github: "https://github.com/Zwin-ux/sunny",
    live: "https://sunny-phi-two.vercel.app/",
    featured: true,
    highlights: [
      "Adaptive lesson generation using OpenAI APIs",
      "Real-time student feedback loop",
      "Full test coverage with Vitest",
    ],
  },
  {
    slug: "catalyst",
    title: "Catalyst",
    summary: "Modular Discord bot engine with plugin architecture and persistent state management.",
    category: "Systems",
    tags: ["TypeScript", "PostgreSQL", "Jest"],
    github: "https://github.com/Zwin-ux/catalyst",
    featured: false,
    highlights: [
      "Plugin-based architecture for extensibility",
      "PostgreSQL-backed persistent state",
      "Comprehensive test suite with Jest",
    ],
  },
  {
    slug: "realtext",
    title: "RealText",
    summary: "Chrome extension that detects AI-generated content in real time using classifier models.",
    category: "AI/ML",
    tags: ["TypeScript", "React", "Jest"],
    github: "https://github.com/Zwin-ux/realtext",
    featured: false,
    highlights: [
      "Real-time content classification",
      "Browser extension with minimal performance overhead",
      "Tested with Jest",
    ],
  },
  {
    slug: "botbot",
    title: "BotBot",
    summary: "AI agent framework for orchestrating multi-step tasks with tool use and memory.",
    category: "AI/ML",
    tags: ["Next.js", "Docker", "GitHub Actions"],
    github: "https://github.com/Zwin-ux/botbot",
    featured: false,
    highlights: [
      "Multi-step task orchestration with tool use",
      "Dockerized deployment pipeline",
      "CI/CD with GitHub Actions",
    ],
  },
  {
    slug: "hexology",
    title: "Hexology",
    summary: "Online multiplayer Hex board game with matchmaking and ELO ranking.",
    category: "Games",
    tags: ["TypeScript", "React"],
    github: "https://github.com/Zwin-ux/hexology",
    live: "https://hexology.me",
    featured: true,
    highlights: [
      "Shipped and live at hexology.me",
      "Real-time multiplayer with matchmaking",
    ],
  },
  {
    slug: "rubrix",
    title: "Rubrix",
    summary: "MMO stock browser game centered around social trading and market dynamics.",
    category: "Games",
    tags: ["TypeScript", "React", "Supabase"],
    github: "https://github.com/Zwin-ux/Rubrix",
    featured: false,
    highlights: [
      "Social trading mechanics",
      "Real-time market simulation",
      "Formerly known as Echo Markets",
    ],
  },
  {
    slug: "funny-cam",
    title: "Funny Cam",
    summary: "Real-time webcam filters and video processing using computer vision.",
    category: "Web",
    tags: ["React", "OpenCV", "TypeScript"],
    github: "https://github.com/Zwin-ux/funny-cam",
    live: "https://quick-jw3c.onrender.com/",
    featured: true,
    highlights: [
      "Real-time facial filter application",
      "Browser-based CV processing",
    ],
  },
  {
    slug: "parabola",
    title: "Parabola",
    summary: "Experimental AI architecture focusing on trajectory-based inference.",
    category: "Research",
    tags: ["Python", "PyTorch", "AI"],
    github: "https://github.com/Zwin-ux/parabola",
    live: "https://parabola-sand.vercel.app/",
    featured: true,
    highlights: [
      "Trajectory-based inference model",
    ],
  },
  {
    slug: "godel",
    title: "Gödel",
    summary: "Self-referential logic engine for automated theorem proving.",
    category: "Research",
    tags: ["Python", "Logic"],
    github: "https://github.com/Zwin-ux/godel",
    live: "https://zwin-ux.github.io/godel/",
    featured: true,
    highlights: [
      "Automated theorem proving",
    ],
  },
  {
    slug: "quantum",
    title: "Quantum",
    summary: "Quantum computing simulation framework for algorithm verification.",
    category: "Research",
    tags: ["Python", "Quantum"],
    github: "https://github.com/Zwin-ux/quantum",
    featured: false,
    highlights: [
      "Quantum circuit simulation",
    ],
  },
  {
    slug: "eidolon",
    title: "Eidolon",
    summary: "Local LLM interface with conversation history and model switching.",
    category: "AI/ML",
    tags: ["Python", "PyTorch", "Transformers", "SQLite"],
    github: "https://github.com/Zwin-ux/eidolon",
    featured: false,
    highlights: [
      "Supports multiple transformer models",
      "SQLite-backed conversation history",
    ],
  },
  {
    slug: "atcai",
    title: "ATCAI",
    summary: "AI-driven air traffic control simulation for routing and conflict resolution.",
    category: "Research",
    tags: ["Python", "TypeScript"],
    github: "https://github.com/Zwin-ux/atcai",
    featured: false,
    highlights: [
      "Simulated ATC environment with conflict detection",
      "AI-based routing decisions",
    ],
  },
  {
    slug: "p-v-np",
    title: "P-V-NP",
    summary: "Computational complexity theory testbed for exploring P vs NP problem spaces.",
    category: "Research",
    tags: ["Python", "TypeScript"],
    github: "https://github.com/Zwin-ux/p-v-np",
    featured: false,
    highlights: [
      "Algorithm benchmarking framework",
      "Visualization of complexity classes",
    ],
  },
];

export const categories: ProjectCategory[] = ["AI/ML", "Web", "Systems", "Research", "Games"];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
