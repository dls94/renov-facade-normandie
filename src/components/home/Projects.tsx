import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Rénovation de façade",
    category: "Ravalement",
    image: "/images/projects/facade-apres-temp.jpg",
  },
  {
    title: "Terrasse en résine",
    category: "Terrasse",
    image: "/images/projects/terrasse-resine-01-temp.jpg",
  },
  {
    title: "Terrasse décorative",
    category: "Résine",
    image: "/images/projects/terrasse-resine-02-temp.jpg",
  },
];

export function Projects() {
  return (
    <section
      id="realisations"
      className="bg-[#071522] px-6 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Nos réalisations
            </p>

            <h2 className="max-w-3xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Des projets qui parlent
              <span className="block text-[#f58213]">d'eux-mêmes.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-zinc-400 lg:pb-1">
            Découvrez quelques-unes de nos réalisations et le savoir-faire que
            nous mettons au service de chaque projet.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {/* Featured project - Before / After */}
          <article className="group relative min-h-[500px] overflow-hidden rounded-2xl">
            <div className="absolute inset-0 grid grid-cols-2">
              {/* Avant */}
              <div className="relative overflow-hidden">
                <Image
                  src="/images/projects/facade-avant-temp.jpg"
                  alt="Façade avant rénovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="25vw"
                />

                <span className="absolute left-5 top-5 rounded-full bg-[#071522] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  Avant
                </span>
              </div>

              {/* Après */}
              <div className="relative overflow-hidden">
                <Image
                  src="/images/projects/facade-apres-temp.jpg"
                  alt="Façade après rénovation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="25vw"
                />

                <span className="absolute right-5 top-5 rounded-full bg-[#f58213] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  Après
                </span>
              </div>
            </div>

            {/* Séparation */}
            <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-white/70" />

            {/* Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071522] via-[#071522]/80 to-transparent p-7 pt-32 sm:p-9 sm:pt-40">
              <span className="text-sm font-bold uppercase tracking-widest text-[#f58213]">
                Ravalement
              </span>

              <h3 className="mt-2 font-heading text-3xl font-bold uppercase text-white sm:text-4xl">
                Rénovation de façade
              </h3>

              {/* <button
                type="button"
                className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#071522] transition-all hover:bg-[#f58213] hover:text-white"
                aria-label="Voir la rénovation de façade"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button> */}
            </div>
          </article>

          {/* Secondary projects */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {projects.slice(1).map((project) => (
              <article
                key={project.title}
                className="group relative min-h-[240px] overflow-hidden rounded-2xl"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071522]/90 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#f58213]">
                    {project.category}
                  </span>

                  <h3 className="mt-1 font-heading text-2xl font-bold uppercase text-white">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-400">
            Vous avez un projet similaire ?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#f58213]"
          >
            Parlons de votre projet
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
