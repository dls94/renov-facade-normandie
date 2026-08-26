type Step = {
  number: string;
  title: string;
  description: string;
};

type ServiceKnowHowProps = {
  data: {
    title: string;
    highlight: string;
    description: string;
    steps: readonly Step[];
  };
};

export function ServiceKnowHow({ data }: ServiceKnowHowProps) {
  return (
    <section className="bg-white px-6 py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
            <span className="h-px w-8 bg-[#f58213]" />
            Notre savoir-faire
          </p>

          <h2 className="font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl lg:text-6xl">
            {data.title}
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-500 sm:text-lg">
            {data.description}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 border-t border-[#071522]/10 sm:grid-cols-3">
          {data.steps.map((step) => (
            <article
              key={step.number}
              className="border-b border-[#071522]/10 px-6 py-8 sm:border-b-0 sm:border-r sm:px-8 sm:py-9 last:border-r-0"
            >
              <span className="text-xs font-medium text-[#f58213]">
                {step.number}
              </span>

              <h3 className="mt-7 font-heading text-xl font-bold uppercase leading-[1.05] text-[#071522] sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}