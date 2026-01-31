import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ContactSection from "../components/ContactSection";
import { getFeaturedProjects } from "../data/projects";

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div>
      <Hero />

      {/* Featured Projects */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-2">Featured Projects</h2>
          <p className="text-zinc-400 mb-8">
            We are a highly lean, optimized software team.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
