"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TeamHighlight from "../components/TeamHighlight";
import ServiceCards from "../components/ServiceCards";
import Projects from "../components/Projects";
import Commissions from "../components/Commissions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Client-side scroll/fade logic is moved to a subcomponent if needed

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Hero onContactClick={() => {
          if (typeof window !== "undefined") {
            const el = document.getElementById("contact");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }} />
        <TeamHighlight />
        <Projects />
        <Commissions />
        <ServiceCards />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
