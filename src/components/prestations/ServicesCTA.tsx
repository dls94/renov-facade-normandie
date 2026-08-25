import { ArrowUpRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
          <span className="h-px w-8 bg-[#f58213]" />
          Un projet ?
          <span className="h-px w-8 bg-[#f58213]" />
        </p>

        <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl lg:text-6xl">
          Votre projet mérite
          <span className="block text-[#f58213]">
            le bon savoir-faire.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
          Échangeons sur votre projet de rénovation extérieure et trouvons
          ensemble la solution adaptée à votre habitation.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f58213] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#071522]"
        >
          Parlons de votre projet
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}