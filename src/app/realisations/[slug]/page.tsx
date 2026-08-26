import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

type ProjectSlug = (typeof projects)[number]["slug"];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#071522] px-6 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/realisations"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux réalisations
          </Link>

          <div className="max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              {project.category}
            </p>

            <h1 className="font-heading text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base text-zinc-400 sm:text-lg">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Projet */}
      <section className="bg-white px-6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              Le projet
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl">
              {project.title}
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-500 sm:text-lg">
              Découvrez cette réalisation réalisée par notre équipe.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}