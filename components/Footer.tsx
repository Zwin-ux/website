import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <span>Bonelli.dev</span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Zwin-ux"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:groupbonelli@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
