const advantages = [
  {
    number: "01",
    title: "30 ans d'expérience",
    description:
      "Un savoir-faire éprouvé au service de vos projets de rénovation extérieure.",
  },
  {
    number: "02",
    title: "Travail soigné",
    description:
      "Une attention particulière portée aux détails et à la qualité de chaque chantier.",
  },
  {
    number: "03",
    title: "Entreprise locale",
    description:
      "Une équipe implantée en Normandie, proche de ses clients et de leurs projets.",
  },
  {
    number: "04",
    title: "Accompagnement",
    description:
      "Un suivi personnalisé de l'étude de votre projet jusqu'à sa réalisation.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-[#071522] px-6 py-20 sm:py-24 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Heading */}
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Notre engagement
            </p>

            <h2 className="max-w-xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pourquoi nous
              <span className="block text-[#f58213]">
                faire confiance ?
              </span>
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-zinc-400">
              Depuis plus de 30 ans, nous accompagnons nos clients dans leurs
              projets de rénovation extérieure en Normandie.
            </p>
          </div>

          {/* Advantages */}
          <div className="grid border-t border-white/10 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <article
                key={advantage.number}
                className="border-b border-white/10 py-7 sm:px-7 sm:py-8 sm:odd:border-r sm:first:border-r"
              >
                <span className="text-sm font-medium text-[#f58213]">
                  {advantage.number}
                </span>

                <h3 className="mt-7 font-heading text-2xl font-bold uppercase text-white">
                  {advantage.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
                  {advantage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}