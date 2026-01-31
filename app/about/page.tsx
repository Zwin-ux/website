import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Bonelli.dev",
  description: "Engineering identity, operating principles, and background.",
};

export default function AboutPage() {
  return (
    <div className="py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">About</h1>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            I build software that ships. My work spans full-stack web
            applications, AI/ML systems, browser extensions, and developer
            tools. I care about clean architecture, comprehensive testing, and
            minimizing unnecessary complexity.
          </p>

          <p>
            Most of my projects are built with TypeScript and React on the
            frontend, Python for ML pipelines, and PostgreSQL or SQLite for
            persistence. I deploy with Docker, GitHub Actions, and Vercel.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Operating Principles</h2>
          <ul className="space-y-3 text-zinc-400">
            <li className="flex gap-3">
              <span className="text-accent shrink-0">-</span>
              <span>Ship working software. Iterate from there.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">-</span>
              <span>Test what matters. Coverage for confidence, not metrics.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">-</span>
              <span>Minimize complexity. Three lines of clear code beat a clever abstraction.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">-</span>
              <span>Document decisions, not obvious code.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent shrink-0">-</span>
              <span>Automate the build, the deploy, and the checks. Manual steps are bugs waiting to happen.</span>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/Zwin-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              GitHub
            </a>
            <a
              href="mailto:groupbonelli@gmail.com"
              className="text-accent hover:underline"
            >
              Email
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
