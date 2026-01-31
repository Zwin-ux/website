import React from "react";

export default function ContactSection() {
  return (
    <section className="py-16 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-zinc-400 mb-6 max-w-lg">
          Open to opportunities in software engineering, AI/ML, and systems
          work. Reach out via email or find me on GitHub.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:groupbonelli@gmail.com"
            className="px-4 py-2 bg-accent text-white hover:bg-blue-600 transition-colors rounded"
          >
            groupbonelli@gmail.com
          </a>
          <a
            href="https://github.com/Zwin-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-700 text-zinc-300 hover:text-foreground hover:border-zinc-500 transition-colors rounded"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
