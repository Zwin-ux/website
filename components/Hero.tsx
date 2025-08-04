import React from "react";

export default function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center py-20 px-6 bg-gradient-to-b from-black to-zinc-900 text-white fade-in-section opacity-100 translate-y-0">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-300">
          Full-Stack Development & Technical Consulting
        </span>
      </h1>
      <p className="text-xl md:text-3xl mb-10 max-w-3xl mx-auto font-medium text-zinc-300">
        We build modern web applications, provide expert technical guidance, and deliver scalable solutions tailored to your needs.
      </p>
      <button
        onClick={scrollToServices}
        className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg text-lg hover:opacity-90 transition-all shadow-lg transform hover:scale-105"
      >
        View Our Work
      </button>
    </section>
  );
}
