import { ProjectsGrid } from "@/components/realisations/ProjectsGrid";

export default function RealisationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#071522] px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Nos réalisations
            </p>

            <h1 className="font-heading text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Des projets
              <span className="block text-[#f58213]">réalisés avec soin.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Découvrez quelques-unes de nos réalisations et notre savoir-faire
              dans l'aménagement et la rénovation de vos extérieurs.
            </p>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="bg-white px-6 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <ProjectsGrid />
        </div>
      </section>
    </main>
  );
}
