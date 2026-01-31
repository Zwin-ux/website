import React from "react";
import { skillGroups } from "../data/skills";

export default function SkillsSection() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <ul className="space-y-1.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-zinc-300">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
