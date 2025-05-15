import React from "react";
const services = [
  {
    title: "Marketing Activations",
    desc: "Campaigns, brand storytelling, and viral loops.",
  },
  {
    title: "Gaming & Community Events",
    desc: "Tournaments, leagues, and highlight media for communities.",
  },
  {
    title: "Rapid Prototyping",
    desc: "Web tools, MVPs, and data visualizations built fast.",
  },
  {
    title: "Creative Consulting",
    desc: "Launch ideas and creative problem-solving for brands and products.",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-6 bg-black text-white flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl w-full px-2">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-zinc-900 rounded-xl p-5 flex flex-col items-center shadow hover:scale-105 transition-transform duration-200 border border-zinc-800"
          >
            <h3 className="text-lg font-semibold mb-1 text-blue-200">{s.title}</h3>
            <p className="text-gray-300 text-center text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
