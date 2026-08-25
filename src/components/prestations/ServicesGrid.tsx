import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Ravalement de façade",
    description:
      "Redonnez une nouvelle vie à votre façade grâce à un ravalement adapté à votre bâtiment.",
  },
  {
    number: "02",
    title: "Isolation extérieure",
    description:
      "Améliorez le confort et les performances de votre habitat grâce à l'isolation thermique par l'extérieur.",
  },
  {
    number: "03",
    title: "Terrasse en résine",
    description:
      "Une solution esthétique, résistante et durable pour aménager ou rénover vos extérieurs.",
  },
  {
    number: "04",
    title: "Gouttières",
    description:
      "Installation et rénovation de vos gouttières pour assurer une bonne évacuation des eaux de pluie.",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-white px-6 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Introduction */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
            <span className="h-px w-8 bg-[#f58213]" />
            Notre expertise
          </p>

          <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#071522] sm:text-5xl">
            Des solutions adaptées
            <span className="block text-[#f58213]">
              à votre habitat.
            </span>
          </h2>
        </div>

        {/* Services */}
        <div className="grid border-t border-[#071522]/10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative border-b border-[#071522]/10 p-7 md:odd:border-r md:p-9 lg:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="font-mono text-sm font-medium text-[#f58213]">
                  {service.number}
                </span>

                <ArrowUpRight className="h-5 w-5 text-[#071522]/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f58213]" />
              </div>

              <h3 className="mt-12 max-w-md font-heading text-3xl font-bold uppercase leading-none text-[#071522] transition-colors group-hover:text-[#f58213] sm:text-4xl">
                {service.title}
              </h3>

              <p className="mt-5 max-w-lg text-base leading-7 text-zinc-500">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}