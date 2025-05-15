"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import GitHubHeatmap from "../components/GitHubHeatmap";
import { fetchGitHubHeatmap } from "../lib/github";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Client-side scroll/fade logic is moved to a subcomponent if needed

export default async function Home() {
  const heatmapData = await fetchGitHubHeatmap();

  return (
    <div className="bg-black min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Hero onContactClick={() => {
          // Scroll to contact section (client-side, best handled in Hero or a client component)
          if (typeof window !== "undefined") {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }} />
        <GitHubHeatmap data={heatmapData} />
        <About />
        <Projects />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
