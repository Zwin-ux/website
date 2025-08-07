import React from "react";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20 px-6 bg-black text-white fade-in-section opacity-100 translate-y-0">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        <span className="text-blue-400">Websites and Consulting, Done Right</span>
      </h1>
      <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-medium text-zinc-300">
        We design, build, and support fast, reliable websites and products. Clear scope, fair pricing, no fluff.
      </p>
      <button
        onClick={scrollToServices}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-all shadow-lg transform hover:scale-105"
      >
        View Services
      </button>
    </section>
  );
}
