import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="accueil">
        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[#f58213]">
              Renov'Façade Normandie
            </p>

            <h1 className="text-4xl font-black tracking-tight text-[#071522] sm:text-6xl">
              Votre façade mérite
              <span className="block text-[#f58213]">
                le meilleur.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600">
              Spécialiste de la rénovation extérieure en Normandie,
              avec plus de 30 ans d’expérience.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}