import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, Users } from "lucide-react";
import { projects } from "../../../data/projects";

type ProjectSlug = (typeof projects)[number]["slug"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Renov'Façade Normandie`,
    description: `${project.title} à ${project.location} — découvrez cette réalisation de Renov'Façade Normandie.`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#071522] px-6 pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/realisations"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-zinc-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux réalisations
          </Link>

          <div className="max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              {project.category}
            </p>

            <h1 className="font-heading text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
              {project.title}
            </h1>

            <p className="mt-6 text-base text-zinc-400 sm:text-lg">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Demande du client */}
      <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Titre */}
          <h2 className="flex items-center gap-3 font-heading text-3xl font-bold uppercase leading-none text-[#071522] sm:text-4xl">
            <span className="h-[3px] w-8 shrink-0 bg-[#f58213]" />
            La demande du client
          </h2>

          {/* Descriptif + encadré */}
          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Descriptif */}
            <div>
              <p className="max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                {project.request.description}
              </p>
            </div>

            {/* Encadré */}
            <div className="bg-[#f5f5f4] px-6 py-6 sm:px-8 sm:py-7">
              <ul className="space-y-5">
                {project.request.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-medium text-[#071522]"
                  >
                    <Check className="h-4 w-4 shrink-0 text-[#f58213]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* La réalisation */}
      <section className="bg-white px-6 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl border-t border-[#071522]/10 pt-12">
          <p className="flex items-center gap-3 font-heading text-3xl font-bold uppercase leading-none text-[#071522] sm:text-4xl">
            <span className="h-[3px] w-8 bg-[#f58213]" />
            La réalisation
          </p>

          <div className="mt-8 grid border-y border-[#071522]/10 sm:grid-cols-2">
            <div className="flex items-center gap-4 border-b border-[#071522]/10 px-0 py-6 sm:border-b-0 sm:border-r sm:px-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#071522] text-white">
                <Clock3 className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                  Durée des travaux
                </p>
                <p className="mt-1 text-sm font-bold uppercase text-[#f58213]">
                  {project.duration}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 px-0 py-6 sm:px-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#071522] text-white">
                <Users className="h-4 w-4" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400">
                  Équipe mobilisée
                </p>
                <p className="mt-1 text-sm font-bold uppercase text-[#f58213]">
                  {project.team}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avant / Après */}
      <section className="bg-white px-6 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl border-t border-[#071522]/10 pt-12">
          <p className="flex items-center gap-3 font-heading text-3xl font-bold uppercase leading-none text-[#071522] sm:text-4xl">
            <span className="h-[3px] w-8 bg-[#f58213]" />
            Avant / Après
          </p>

          <div className="relative mt-8 grid gap-3 sm:grid-cols-2 sm:gap-0">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.beforeImage}
                alt={`Avant les travaux — ${project.title}`}
                fill
                className="object-cover"
              />

              <span className="absolute left-4 top-4 bg-[#071522] px-3 py-2 text-[10px] font-bold uppercase text-white">
                Avant
              </span>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.afterImage}
                alt={`Après les travaux — ${project.title}`}
                fill
                className="object-cover"
              />

              <span className="absolute left-4 top-4 bg-[#f58213] px-3 py-2 text-[10px] font-bold uppercase text-white">
                Après
              </span>
            </div>

            <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 bg-white px-3 py-3 shadow-sm sm:flex">
              <ArrowLeft className="h-3 w-3 text-[#071522]" />
              <ArrowRight className="h-3 w-3 text-[#071522]" />
            </div>
          </div>
        </div>
      </section>

      {/* Résultat */}
      <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl border-t border-[#071522]/10 pt-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 font-heading text-3xl font-bold uppercase leading-none text-[#071522] sm:text-4xl">
                <span className="h-[3px] w-8 bg-[#f58213]" />
                Le résultat
              </p>
            </div>

            <div>
              <p className="max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
                {project.result.description}
              </p>

              <div className="mt-8 grid border-t border-[#f58213] sm:grid-cols-3">
                {project.result.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="border-b border-[#071522]/10 py-4 sm:border-b-0 sm:border-r sm:px-4 first:sm:pl-0 last:sm:border-r-0"
                  >
                    <p className="text-[10px] font-bold uppercase leading-4 text-[#071522]">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl bg-[#f5f5f3] px-6 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f58213]">
                Votre projet
              </p>

              <h2 className="mt-2 font-heading text-2xl font-bold uppercase leading-none text-[#071522] sm:text-3xl">
                Un projet similaire ?
              </h2>

              <p className="mt-3 text-xs text-zinc-500">
                Nous vous accompagnons dans vos projets de rénovation
                extérieure.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 bg-[#f58213] px-6 py-4 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d96f08]"
            >
              Demander un devis
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
