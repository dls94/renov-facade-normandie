const interventionAreas = [
  "Rouen",
  "Évreux",
  "Caen",
  "Le Havre",
  "Dieppe",
  "Vernon",
  "Yvetot",
  "Seine-Maritime",
  "Eure",
];

export function Footer() {
  return (
    <footer className="bg-[#071522] px-6 py-16 text-white lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.5fr_0.8fr] lg:gap-16">
          {/* Identité */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f58213] text-lg font-bold">
                RF
              </div>

              <div>
                <p className="text-sm font-bold">RENOV'FACADE</p>
                <p className="mt-1 text-xs font-semibold text-zinc-500">
                  NORMANDIE
                </p>
              </div>
            </div>

            <p className="mt-7 max-w-md text-sm leading-6 text-zinc-400">
              Votre spécialiste de la rénovation extérieure en Normandie.
            </p>

            <p className="mt-1 text-sm leading-6 text-zinc-500">
              30 ans d'expérience au service de votre habitat.
            </p>
          </div>

          {/* Zones d'intervention */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f58213]">
              Zones d'intervention
            </p>

            <div className="grid grid-cols-3 gap-x-2 gap-y-3 text-sm text-zinc-400">
              <span>Rouen</span>
              <span>Évreux</span>
              <span>Caen</span>
              <span>Le Havre</span>
              <span>Dieppe</span>
              <span>Lisieux</span>
            </div>

            <p className="mt-4 text-sm text-zinc-500">Et alentours</p>
          </div>

          {/* Réseaux */}
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f58213]">
              Suivez-nous
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm font-bold transition-colors hover:border-[#f58213] hover:bg-[#f58213]"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-bold transition-colors hover:border-[#f58213] hover:bg-[#f58213]"
              >
                ig
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs font-bold transition-colors hover:border-[#f58213] hover:bg-[#f58213]"
              >
                in
              </a>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-500">
              Retrouvez nos réalisations et notre actualité sur les réseaux.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Renov'Façade Normandie. Tous droits réservés.</p>

          <p>Rénovation extérieure en Normandie</p>
        </div>
      </div>
    </footer>
  );
}
