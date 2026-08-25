import { ArrowUpRight, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-[#f58213]">
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                <span className="h-px w-8 bg-white" />
                Votre projet
              </p>

              <h2 className="mt-6 max-w-3xl font-heading text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Parlons de votre
                <span className="block text-[#071522]">
                  projet de rénovation.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
                Vous avez un projet de rénovation extérieure en Normandie ?
                Contactez-nous pour échanger sur vos besoins et obtenir un
                devis gratuit.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4 bg-[#071522] p-8 sm:p-12 lg:min-w-[360px] lg:p-14">
              <a
                href="tel:+33698452470"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 px-6 font-bold text-white transition-colors hover:border-[#f58213] hover:text-[#f58213]"
              >
                <Phone className="h-5 w-5" />
                06 98 45 24 70
              </a>

              <a
                href="mailto:contact@renovfacade-normandie.fr"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#f58213] px-6 font-bold text-white transition-colors hover:bg-white hover:text-[#071522]"
              >
                Demander un devis
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}