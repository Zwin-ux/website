import React from "react";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-20 px-6 bg-black text-white fade-in-section">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Design. Build. Scale.
        </span>
      </h1>
      <p className="text-xl md:text-3xl mb-10 max-w-3xl mx-auto font-medium text-zinc-300">
        We craft bespoke digital experiences, provide expert tech guidance, and create marketing that resonates.
      </p>
      <button
        onClick={scrollToServices}
        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg text-lg hover:opacity-90 transition-opacity shadow-lg transform hover:scale-105"
      >
        Explore Our Services
      </button>
    </section>
  );
}
