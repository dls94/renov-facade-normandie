export function Experience() {
  return (
    <section
      id="a-propos"
      className="bg-white px-6 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Contenu */}
          <div>
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Notre expérience
            </p>

            <h2 className="max-w-xl font-heading text-5xl font-bold uppercase leading-[0.9] tracking-tight text-[#071522] sm:text-6xl lg:text-7xl">
              30 ans
              <span className="block text-[#f58213]">
                d'expérience.
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600">
              Depuis plus de 30 ans, nous mettons notre savoir-faire au
              service de la rénovation extérieure des habitations en
              Normandie.
            </p>
          </div>

          {/* Bloc chiffre */}
          <div className="relative overflow-hidden rounded-2xl bg-[#071522] p-8 sm:p-12">
            <span className="absolute -right-4 -top-12 font-heading text-[180px] font-bold leading-none text-white/5">
              30
            </span>

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
                Plus de
              </p>

              <p className="mt-2 font-heading text-7xl font-bold text-white sm:text-8xl">
                30
              </p>

              <p className="mt-1 text-xl font-bold uppercase tracking-wider text-white">
                ans d'expérience
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-6 max-w-md text-sm leading-6 text-zinc-400">
                Un savoir-faire artisanal, une équipe expérimentée et une
                exigence constante pour chaque chantier.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}