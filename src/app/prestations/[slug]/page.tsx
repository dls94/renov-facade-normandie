import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { ResinAdvantages } from "@/components/prestations/ResinAdvantages";
import { ServiceProjects } from "@/components/prestations/ServiceProjects";
import { ServiceKnowHow } from "@/components/prestations/ServicesKnowHow";

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

      <ServiceKnowHow />

      <ResinAdvantages />

      <ServiceProjects />
    </main>
  );
}
