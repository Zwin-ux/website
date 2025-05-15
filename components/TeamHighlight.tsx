import React from "react";

export default function TeamHighlight() {
  return (
    <section className="py-6 bg-black text-white flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">A team of 10+ designers, engineers, and creators</h2>
      <p className="text-gray-400 mb-4 max-w-xl text-center">
        We work together to ship bold ideas for brands, games, and communities.
      </p>
      <div className="flex flex-wrap justify-center gap-5 mt-4">
        {/* Replace with real avatars if available */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-fuchsia-500 flex items-center justify-center text-xl font-bold shadow-lg">
            <span className="text-white">{i === 0 ? 'B' : '+'}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
