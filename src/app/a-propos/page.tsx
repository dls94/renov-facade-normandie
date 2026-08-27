import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos | Renov'Façade Normandie",
  description:
    "Découvrez Renov'Façade Normandie, son savoir-faire et son approche pour vos projets de rénovation et d'aménagement extérieur en Normandie.",
};

export default function AProposPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#071522] px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              À propos
            </p>

            <h1 className="font-heading text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Un savoir-faire
              <span className="block text-[#f58213]">
                au service de votre habitat.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Nous accompagnons les particuliers dans leurs projets de
              rénovation et d'aménagement extérieur en Normandie.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Notre entreprise
            </p>
          </div>

          <div>
            <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl">
              Des projets pensés
              <span className="block text-[#f58213]">
                pour durer.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-zinc-500 sm:text-lg">
              <p>
                Chaque habitation possède ses particularités. Notre approche
                consiste à étudier chaque projet avec attention afin de
                proposer une solution adaptée aux besoins du bâtiment et aux
                attentes de nos clients.
              </p>

              <p>
                De la préparation des supports aux finitions, nous accordons
                une importance particulière à la qualité du travail réalisé et
                au soin apporté à chaque étape du chantier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-[#f5f5f3] px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Notre approche
            </p>

            <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl lg:text-6xl">
              Une méthode simple.
              <span className="block text-[#f58213]">
                Un travail soigné.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-[#071522]/10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Écoute",
                description:
                  "Comprendre votre projet, vos attentes et les contraintes de votre habitation.",
              },
              {
                number: "02",
                title: "Conseil",
                description:
                  "Vous orienter vers des solutions cohérentes avec votre bâtiment et votre projet.",
              },
              {
                number: "03",
                title: "Qualité",
                description:
                  "Porter une attention particulière à la préparation, à la mise en œuvre et aux finitions.",
              },
            ].map((item) => (
              <article
                key={item.number}
                className="bg-[#f5f5f3] px-7 py-9 sm:px-8 sm:py-10"
              >
                <span className="text-sm font-medium text-[#f58213]">
                  {item.number}
                </span>

                <h3 className="mt-8 font-heading text-2xl font-bold uppercase text-[#071522]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations */}
      <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
                <span className="h-px w-8 bg-[#f58213]" />
                Nos domaines d'intervention
              </p>

              <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl">
                Des solutions pour
                <span className="block text-[#f58213]">
                  votre extérieur.
                </span>
              </h2>
            </div>

            <Link
              href="/prestations"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#071522] transition-colors hover:text-[#f58213]"
            >
              Découvrir nos prestations
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid border-t border-[#071522]/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Ravalement de façade",
              "Isolation extérieure",
              "Terrasse en résine",
              "Gouttières",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 border-b border-[#071522]/10 px-5 py-6 lg:border-r last:lg:border-r-0"
              >
                <Check className="h-4 w-4 shrink-0 text-[#f58213]" />
                <span className="text-sm font-bold uppercase text-[#071522]">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071522] px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              Votre projet
            </p>

            <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
              Parlons de votre
              <span className="block text-[#f58213]">
                projet.
              </span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 bg-[#f58213] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d96f08]"
          >
            Nous contacter
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}