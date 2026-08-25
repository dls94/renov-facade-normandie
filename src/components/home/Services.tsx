import {
  ArrowUpRight,
  House,
  Paintbrush,
  Shovel,
  Waves,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Paintbrush,
    title: "Ravalement de façade",
    description:
      "Redonnez une seconde jeunesse à votre habitation grâce à une façade rénovée, protégée et durable.",
  },
  {
    number: "02",
    icon: House,
    title: "Isolation thermique par l'extérieur",
    description:
      "Améliorez votre confort et réduisez vos dépenses énergétiques grâce à une isolation performante.",
  },
  {
    number: "03",
    icon: Waves,
    title: "Terrasses en résine",
    description:
      "Une finition décorative, antidérapante et résistante pour créer une terrasse esthétique et durable.",
  },
  {
    number: "04",
    icon: Shovel,
    title: "Pose et remplacement de gouttières",
    description:
      "Assurez une évacuation optimale des eaux pluviales avec des gouttières adaptées à votre habitation.",
  },
];

export function Services() {
  return (
    <section
      id="prestations"
      className="bg-white px-6 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Nos prestations
            </p>

            <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#071522] sm:text-5xl lg:text-6xl">
              Nous prenons soin
              <span className="block text-[#f58213]">
                de votre extérieur.
              </span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg leading-8 text-zinc-600">
              De la façade aux extérieurs, nous vous accompagnons dans vos
              projets de rénovation avec le savoir-faire d'un artisan et plus
              de 30 ans d'expérience.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#f58213]/40 hover:bg-[#071522] hover:shadow-xl sm:p-8"
              >
                {/* Number */}
                <span className="absolute right-6 top-4 font-heading text-7xl font-bold leading-none text-zinc-200 transition-colors duration-300 group-hover:text-white/5">
                  {service.number}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f58213] text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-8 max-w-sm font-heading text-2xl font-bold uppercase leading-tight text-[#071522] transition-colors duration-300 group-hover:text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 transition-colors duration-300 group-hover:text-zinc-300 sm:text-base">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-bold text-[#071522] transition-colors duration-300 group-hover:text-[#f58213]">
                    En savoir plus
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#f58213] px-7 py-7 sm:flex-row sm:items-center sm:px-9">
          <div>
            <p className="font-heading text-2xl font-bold uppercase text-white">
              Un projet de rénovation ?
            </p>
            <p className="mt-1 text-sm text-white/80">
              Échangeons ensemble sur vos besoins.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#071522] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#102536]"
          >
            Demander un devis
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}