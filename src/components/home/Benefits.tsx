import { CheckCircle2, Clock3, MapPin, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Savoir-faire",
    description: "30 ans d'expérience dans la rénovation extérieure.",
  },
  {
    icon: CheckCircle2,
    title: "Travail soigné",
    description: "Une attention portée aux détails sur chaque chantier.",
  },
  {
    icon: MapPin,
    title: "En Normandie",
    description: "Une entreprise locale au service de ses clients.",
  },
  {
    icon: Clock3,
    title: "Accompagnement",
    description: "Un suivi de votre projet de l'étude à la réalisation.",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#071522] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="bg-[#071522] p-7 sm:p-8"
              >
                <Icon className="h-7 w-7 text-[#f58213]" />

                <h3 className="mt-6 font-heading text-lg font-bold uppercase text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}