type Advantage = {
  number: string;
  title: string;
  description: string;
};

type ServiceAdvantagesProps = {
  advantages: {
    title: string;
    highlight: string;
    items: readonly Advantage[];
  };
};

export function ServiceAdvantages({
  advantages,
}: ServiceAdvantagesProps) {
  return (
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Titre */}
        <div className="max-w-6xl">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
            <span className="h-px w-8 bg-[#f58213]" />
            Les avantages
          </p>

          <h2 className="font-heading text-5xl font-bold uppercase leading-[0.9] tracking-tight text-[#071522] sm:text-6xl">
            {advantages.title}{" "}
            <span className="text-[#f58213]">{advantages.highlight}</span>
          </h2>
        </div>

        {/* Grille */}
        <div className="mx-auto mt-12 w-full max-w-[720px]">
          <div className="grid w-full grid-cols-2 border-t border-[#071522]/10">
            {advantages.items.map((advantage, index) => (
              <article
                key={advantage.number}
                className={`min-h-[290px] border-b border-[#071522]/10 px-8 py-10 lg:px-10 ${
                  index % 2 === 0 ? "border-r" : ""
                }`}
              >
                <span className="text-sm font-medium text-[#f58213]">
                  {advantage.number}
                </span>

                <h3 className="mt-9 font-heading text-2xl font-bold uppercase leading-[1.05] text-[#071522]">
                  {advantage.title}
                </h3>

                <p className="mt-5 max-w-sm text-[15px] leading-7 text-zinc-500">
                  {advantage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}