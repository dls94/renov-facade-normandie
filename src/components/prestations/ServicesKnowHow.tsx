const steps = [
  {
    number: "01",
    title: "Étude du projet",
    description:
      "Analyse de votre habitation, de l'état des supports et de vos attentes.",
  },
  {
    number: "02",
    title: "Préparation & mise en œuvre",
    description:
      "Une intervention réalisée avec des techniques et matériaux adaptés à votre projet.",
  },
  {
    number: "03",
    title: "Finition",
    description:
      "Un résultat soigné, pensé pour s'intégrer durablement à votre extérieur.",
  },
];

export function ServiceKnowHow() {
  return (
    // Notre savoir-faire
    <section className="bg-white px-6 pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        {/* Titre à gauche */}
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
            <span className="h-px w-8 bg-[#f58213]" />
            Notre savoir-faire
          </p>

          <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl lg:text-6xl">
            Une solution adaptée
            <span className="block text-[#f58213]">à votre projet.</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-500 sm:text-lg">
            Chaque projet est étudié avec attention afin de proposer une
            solution adaptée à votre habitation et à vos besoins.
          </p>
        </div>

        {/* Grille centrée dans la page */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 border-t border-[#071522]/10 sm:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="min-h-[280px] border-b border-[#071522]/10 px-8 py-10 sm:border-b-0 sm:border-r last:border-r-0"
            >
              <span className="text-sm font-medium text-[#f58213]">
                {step.number}
              </span>

              <h3 className="mt-10 font-heading text-2xl font-bold uppercase leading-[1.05] text-[#071522]">
                {step.title}
              </h3>

              <p className="mt-6 text-[15px] leading-7 text-zinc-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
