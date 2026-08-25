import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const services = {
  "ravalement-de-facade": {
    title: "Ravalement de façade",
    category: "Ravalement",
    description:
      "Redonnez une nouvelle vie à votre façade grâce à un ravalement adapté à votre bâtiment.",
  },
  "isolation-exterieure": {
    title: "Isolation extérieure",
    category: "Isolation",
    description:
      "Améliorez le confort et les performances de votre habitat grâce à l'isolation thermique par l'extérieur.",
  },
  "terrasse-en-resine": {
    title: "Terrasse en résine",
    category: "Résine",
    description:
      "Une solution esthétique, résistante et durable pour aménager ou rénover vos extérieurs.",
  },
  gouttieres: {
    title: "Gouttières",
    category: "Gouttières",
    description:
      "Installation et rénovation de vos gouttières pour assurer une bonne évacuation des eaux de pluie.",
  },
} as const;

type ServiceSlug = keyof typeof services;

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in services)) {
    notFound();
  }

  const service = services[slug as ServiceSlug];

  return (
    <main>
      <section className="bg-[#071522] px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              {service.category}
            </p>

            <h1 className="font-heading text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
              {service.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              Notre savoir-faire
            </p>

            <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl">
              Une solution adaptée
              <span className="block text-[#f58213]">
                à votre projet.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-500">
              Chaque projet est étudié avec attention afin de proposer une
              solution adaptée à votre habitation et à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#071522] px-6 py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
                Nos réalisations
              </p>

              <h2 className="font-heading text-4xl font-bold uppercase text-white sm:text-5xl">
                Découvrez notre travail.
              </h2>
            </div>

            <a
              href="/realisations"
              className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-[#f58213]"
            >
              Toutes nos réalisations
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}