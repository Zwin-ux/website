import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SpotifyEmbed from "../components/SpotifyEmbed";

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* About Section */}
      <section id="about" className="px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="space-y-6 text-zinc-400 leading-relaxed max-w-2xl">
            <p>
              We build software to help others and make products that matter. 
              Our goal is to fuel creativity and provide the tools needed to bring ideas to life.
            </p>
          </div>
        </div>
      </section>

      <ProjectsSection />

      {/* Music / Vibe Check */}
      <SpotifyEmbed />

    </div>
  );
}
