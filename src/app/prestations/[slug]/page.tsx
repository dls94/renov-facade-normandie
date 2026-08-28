import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ServiceAdvantages } from "@/components/prestations/ServiceAdvantages";
import { ServiceProjects } from "@/components/prestations/ServiceProjects";
import { ServiceKnowHow } from "@/components/prestations/ServicesKnowHow";

const services = {
  "ravalement-de-facade": {
    title: "Ravalement de façade",
    category: "Ravalement",
    description:
      "Redonnez une nouvelle vie à votre façade grâce à un ravalement adapté à votre bâtiment.",

    knowHow: {
      title: "Une façade pensée",
      highlight: "pour durer.",
      description:
        "Chaque façade est étudiée afin de choisir les techniques et les finitions adaptées à son état et à votre projet.",
      steps: [
        {
          number: "01",
          title: "Diagnostic de la façade",
          description:
            "Analyse de l'état des supports et identification des travaux nécessaires.",
        },
        {
          number: "02",
          title: "Préparation des supports",
          description:
            "Nettoyage, préparation et traitement des surfaces avant intervention.",
        },
        {
          number: "03",
          title: "Application & finition",
          description:
            "Mise en œuvre des revêtements et réalisation des finitions avec soin.",
        },
      ],
    },

    advantages: {
      title: "Une façade rénovée",
      highlight: "pour durer.",
      items: [
        {
          number: "01",
          title: "Un aspect renouvelé",
          description:
            "Redonnez à votre façade une apparence propre, soignée et adaptée à votre habitation.",
        },
        {
          number: "02",
          title: "Une meilleure protection",
          description:
            "Protégez durablement vos murs extérieurs contre les agressions du temps et des intempéries.",
        },
        {
          number: "03",
          title: "Une finition personnalisée",
          description:
            "Choisissez une finition cohérente avec le style et l'architecture de votre maison.",
        },
        {
          number: "04",
          title: "Un entretien facilité",
          description:
            "Une façade rénovée et protégée, plus simple à entretenir au quotidien.",
        },
      ],
    },

    projects: [
      {
        image: "/images/ravalement-facade.jpg",
        title: "Ravalement de façade",
        location: "Rouen",
      },
      {
        image: "/images/renovation-facade.webp",
        title: "Rénovation de façade",
        location: "Évreux",
      },
      {
        image: "/images/facade-maison.jpg",
        title: "Rénovation extérieure",
        location: "Le Havre",
      },
    ],
  },

  "isolation-exterieur": {
    title: "Isolation extérieure",
    category: "Isolation",
    description:
      "Améliorez le confort et les performances de votre habitat grâce à l'isolation thermique par l'extérieur.",

    knowHow: {
      title: "Une isolation pensée",
      highlight: "pour votre confort.",
      description:
        "Chaque habitation est étudiée afin de proposer une solution d'isolation adaptée à ses caractéristiques et à vos besoins.",
      steps: [
        {
          number: "01",
          title: "Étude du bâtiment",
          description:
            "Analyse de votre habitation et identification de la solution d'isolation adaptée.",
        },
        {
          number: "02",
          title: "Pose de l'isolation",
          description:
            "Mise en œuvre de l'isolant et des différents éléments du système dans les règles de l'art.",
        },
        {
          number: "03",
          title: "Finition de la façade",
          description:
            "Réalisation d'une finition soignée pour protéger et valoriser votre extérieur.",
        },
      ],
    },

    advantages: {
      title: "Une isolation conçue",
      highlight: "pour votre confort.",
      items: [
        {
          number: "01",
          title: "Un meilleur confort",
          description:
            "Améliorez le confort thermique de votre habitation été comme hiver.",
        },
        {
          number: "02",
          title: "Moins de déperditions",
          description:
            "Limitez les pertes de chaleur grâce à une isolation performante par l'extérieur.",
        },
        {
          number: "03",
          title: "Une façade modernisée",
          description:
            "Profitez des travaux d'isolation pour donner un nouvel aspect à votre façade.",
        },
        {
          number: "04",
          title: "Une solution durable",
          description:
            "Améliorez durablement les performances énergétiques de votre habitation.",
        },
      ],
    },

    projects: [
      {
        image: "/images/isolation-exterieure.jpg",
        title: "Isolation extérieure",
        location: "Rouen",
      },
      {
        image: "/images/isolation-facade.webp",
        title: "Isolation de façade",
        location: "Évreux",
      },
      {
        image: "/images/renovation-isolation.jpg",
        title: "Rénovation énergétique",
        location: "Le Havre",
      },
    ],
  },

  "terrasse-en-resine": {
    title: "Terrasse en résine",
    category: "Résine",
    description:
      "Une solution esthétique, résistante et durable pour aménager ou rénover vos extérieurs.",

    knowHow: {
      title: "Une terrasse pensée",
      highlight: "pour durer.",
      description:
        "Chaque support est étudié et préparé afin de garantir une finition esthétique et durable.",
      steps: [
        {
          number: "01",
          title: "Étude du projet",
          description:
            "Analyse de votre terrasse, de l'état des supports et de vos attentes.",
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
      ],
    },

    advantages: {
      title: "Une terrasse pensée",
      highlight: "pour durer.",
      items: [
        {
          number: "01",
          title: "Un rendu esthétique",
          description:
            "Une finition moderne qui permet de personnaliser l'apparence de votre terrasse.",
        },
        {
          number: "02",
          title: "Une solution durable",
          description:
            "Un revêtement conçu pour résister aux usages quotidiens et aux conditions extérieures.",
        },
        {
          number: "03",
          title: "Une rénovation adaptée",
          description:
            "Une solution idéale pour transformer ou rénover une terrasse existante.",
        },
        {
          number: "04",
          title: "Un entretien simplifié",
          description:
            "Une surface pratique au quotidien et facile à entretenir.",
        },
      ],
    },

    projects: [
      {
        image: "/images/projects/terrasse-resine-apres.webp",
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
    ],
  },

  gouttieres: {
    title: "Gouttières",
    category: "Gouttières",
    description:
      "Installation et rénovation de vos gouttières pour assurer une bonne évacuation des eaux de pluie.",

    knowHow: {
      title: "Des gouttières pensées",
      highlight: "pour durer.",
      description:
        "Nous adaptons l'installation à votre habitation afin d'assurer une évacuation efficace et durable des eaux de pluie.",
      steps: [
        {
          number: "01",
          title: "Étude de l'installation",
          description:
            "Analyse de la toiture, des écoulements et de l'installation existante.",
        },
        {
          number: "02",
          title: "Pose & remplacement",
          description:
            "Installation ou remplacement des gouttières et des différents éléments d'évacuation.",
        },
        {
          number: "03",
          title: "Contrôle & finition",
          description:
            "Vérification de l'écoulement et contrôle de l'ensemble de l'installation.",
        },
      ],
    },

    advantages: {
      title: "Des gouttières",
      highlight: "faites pour durer.",
      items: [
        {
          number: "01",
          title: "Une évacuation efficace",
          description:
            "Assurez une bonne évacuation des eaux de pluie autour de votre habitation.",
        },
        {
          number: "02",
          title: "Une protection durable",
          description:
            "Limitez les risques liés aux eaux stagnantes et aux infiltrations.",
        },
        {
          number: "03",
          title: "Une installation adaptée",
          description:
            "Une solution choisie selon votre toiture et la configuration de votre habitation.",
        },
        {
          number: "04",
          title: "Un entretien simplifié",
          description:
            "Une installation pratique à surveiller et à entretenir au fil des saisons.",
        },
      ],
    },

    projects: [
      {
        image: "/images/gouttieres.webp",
        title: "Pose de gouttières",
        location: "Rouen",
      },
      {
        image: "/images/renovation-gouttiere.jpg",
        title: "Rénovation de gouttières",
        location: "Évreux",
      },
      {
        image: "/images/gouttieres-maison.webp",
        title: "Installation extérieure",
        location: "Le Havre",
      },
    ],
  },
} as const;

type ServiceSlug = keyof typeof services;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!(slug in services)) {
    return {};
  }

  const service = services[slug as ServiceSlug];

  return {
    title: `${service.title} | Renov'Façade Normandie`,
    description: service.description,
  };
}

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
      <section className="bg-[#071522] px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-24 lg:pt-40">
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

      <ServiceKnowHow data={service.knowHow} />

      <ServiceAdvantages advantages={service.advantages} />

      <ServiceProjects projects={service.projects} />
    </main>
  );
}
