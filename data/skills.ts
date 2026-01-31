export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express", "PyTorch", "Tailwind CSS"],
  },
  {
    category: "Infrastructure & Cloud",
    skills: ["Docker", "GitHub Actions", "Vercel", "Supabase", "PostgreSQL", "SQLite"],
  },
  {
    category: "Testing",
    skills: ["Jest", "Vitest", "React Testing Library", "Playwright"],
  },
  {
    category: "Concepts",
    skills: [
      "REST APIs",
      "CI/CD",
      "Agile / Scrum",
      "System Design",
      "Machine Learning",
      "LLM Integration",
    ],
  },
];
