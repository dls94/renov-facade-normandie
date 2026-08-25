import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Experience } from "@/components/home/Experience";
import { Benefits } from "@/components/home/Benefits";
import { Contact } from "@/components/home/Contact";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Benefits />
        <Contact />
      </main>
    </div>
  );
}