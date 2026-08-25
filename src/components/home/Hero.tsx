import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-[#071522]"
    >
      {/* Decorative background */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#f58213]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#f58213]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl lg:min-h-[620px] lg:grid-cols-2">
            {/* Content */}
            <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-8 lg:py-20">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-[#f58213]" />
                    Spécialiste de la rénovation extérieure
                </div>

            <p className="font-heading text-5xl font-bold uppercase leading-none tracking-tight text-[#f58213] sm:text-7xl">
            30 ans
            </p>

            <h1 className="mt-2 max-w-xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl">
            d'expérience
            </h1>

            <p className="mt-6 max-w-xl text-xl font-bold leading-snug text-white sm:text-2xl">
                Au service de votre habitat.
            </p>

            <p className="mt-4 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg">
                Redonnez une seconde jeunesse à votre maison avec une entreprise
                spécialisée dans la rénovation extérieure en Normandie.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f58213] px-6 py-4 font-bold text-white transition-all hover:bg-[#ff982f] hover:shadow-lg"
                >
                Demander un devis gratuit
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                href="tel:+33698452470"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-bold text-white transition-all hover:bg-white/10"
                >
                <Phone className="h-5 w-5 text-[#f58213]" />
                06 98 45 24 70
                </a>
            </div>

          {/* Trust points */}
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
                {[
                "Entreprise assurée",
                "Garantie décennale",
                "Devis gratuit",
                "Intervention rapide",
                ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f58213]" />
                    <span className="text-xs font-medium leading-4 text-zinc-300">
                    {item}
                    </span>
                </div>
                ))}
            </div>
        </div>

        {/* Before / After */}
        <div className="relative min-h-[420px] overflow-hidden lg:min-h-0">
          {/* BEFORE */}
          <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
            <div className="absolute inset-0 bg-zinc-700">
              <div className="flex h-full items-center justify-center p-8 text-center">
                <div>
                  <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-white/50">
                    Avant
                  </div>

                  <div className="text-7xl font-black text-white/20">
                    FAÇADE
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute left-4 top-4 rounded-full bg-[#071522] px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
              Avant
            </div>
          </div>

          {/* AFTER */}
          <div
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden"
            style={{
              clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#f5e5d4] via-[#dfc1a3] to-[#b8895d] p-8 text-center">
              <div>
                <div className="text-7xl font-black text-[#071522]/20">
                  MAISON
                </div>
              </div>
            </div>

            <div className="absolute right-4 top-4 rounded-full bg-[#f58213] px-4 py-2 text-xs font-black uppercase tracking-wider text-white">
              Après
            </div>
          </div>

          {/* Divider */}
          <div className="absolute inset-y-0 left-1/2 z-10 w-px -translate-x-1/2 bg-white/80 shadow-lg">
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#f58213] text-xl font-black text-white shadow-xl">
              ↔
            </div>
          </div>

          {/* Experience badge */}
          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-2xl border border-[#f58213] bg-[#071522]/95 px-6 py-4 text-center shadow-2xl backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-widest text-[#f58213]">
              Plus de
            </p>
            <p className="text-3xl font-black text-white">30 ANS</p>
            <p className="text-xs font-bold uppercase text-zinc-300">
              d'expérience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}