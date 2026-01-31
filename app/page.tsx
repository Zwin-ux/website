import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
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
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <SkillsSection />

      {/* Assisted Funding */}
      <section className="py-16 px-6 border-t border-zinc-800">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Assisted Funding</h2>
          <p className="text-zinc-400 leading-relaxed max-w-2xl">
            Provided operational and technical assistance to independent creators
            shipping software and media projects. This includes infrastructure
            setup, deployment pipelines, and technical advising for early-stage
            products across web, games, and AI tooling.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
