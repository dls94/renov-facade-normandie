import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    image: "/images/terrasse-resine.webp",
    title: "Terrasse en résine",
    location: "Rouen",
  },
  {
    image: "/images/renovation-terrasse.jpg",
    title: "Rénovation de terrasse",
    location: "Évreux",
  },
  {
    image: "/images/amenagement-exterieur.png",
    title: "Aménagement extérieur",
    location: "Le Havre",
  },
];

export function ServiceProjects() {
  return (
    <section className="bg-[#071522] px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Nos réalisations
            </p>

            <h2 className="max-w-2xl font-heading text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Découvrez notre
              <span className="block text-[#f58213]">
                travail.
              </span>
            </h2>
          </div>

          <a
            href="/realisations"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:text-[#f58213]"
          >
            Toutes nos réalisations
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Réalisations */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">
          {/* Grande réalisation */}
          <article>
            <div className="group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="font-heading text-2xl font-bold uppercase text-white sm:text-3xl">
                {projects[0].title}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                {projects[0].location}
              </p>
            </div>
          </article>

          {/* Colonne secondaire */}
          <div className="flex flex-col gap-10">
            {projects.slice(1).map((project) => (
              <article key={project.title}>
                <div className="group overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="font-heading text-xl font-bold uppercase text-white">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}