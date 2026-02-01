import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import SpotifyEmbed from "../components/SpotifyEmbed";
import { getFeaturedProjects } from "../data/projects";

export default function Home() {
  const featured = getFeaturedProjects();

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

      {/* Featured Projects */}
      <section id="projects" className="px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <p className="text-zinc-400">
              A selection of shipped projects across AI/ML, web, and systems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Music / Vibe Check */}
      <SpotifyEmbed />

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
