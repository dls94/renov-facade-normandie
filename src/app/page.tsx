import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Projects } from "@/components/home/Projects";
import { Experience } from "@/components/home/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience/>
      </main>
    </div>
  );
}