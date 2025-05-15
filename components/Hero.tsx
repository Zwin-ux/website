import React from "react";

export default function Hero({ onContactClick }: { onContactClick?: () => void }) {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center items-center text-center pt-28 pb-16 bg-black text-white fade-in-section">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">Bonelli Labs</h1>
      <p className="text-lg md:text-2xl mb-8 max-w-xl mx-auto font-medium text-gray-300">
        We prototype weird ideas fast. Available for freelance, Cheap High Quality Work
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition duration-200 pulse-on-hover"
        onClick={onContactClick}
      >
        Contact Us
      </button>
    </section>
  );
}
