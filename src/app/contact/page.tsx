"use client";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const formData = new FormData(event.currentTarget);
      const form = event.currentTarget;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          project: formData.get("project"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus(data.message || "Une erreur est survenue lors de l'envoi.");
        return;
      }

      setStatus("Votre demande a bien été envoyée.");
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("Impossible d'envoyer votre demande. Réessayez.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#071522] px-6 pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              <span className="h-px w-8 bg-[#f58213]" />
              Contact
            </p>

            <h1 className="font-heading text-5xl font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Parlons de
              <span className="block text-[#f58213]">votre projet.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Une question, un projet de rénovation ou une demande de devis ?
              Contactez-nous et échangeons sur vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Informations */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f58213]">
              Nous contacter
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold uppercase leading-[0.95] text-[#071522] sm:text-5xl">
              Un projet ?
              <span className="block text-[#f58213]">Échangeons.</span>
            </h2>

            <div className="mt-10 space-y-7">
              <a
                href="tel:+33612345678"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#071522] text-white">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                    Téléphone
                  </p>
                  <p className="mt-1 font-semibold text-[#071522] transition-colors group-hover:text-[#f58213]">
                    06 12 34 56 78
                  </p>
                </div>
              </a>

              <a
                href="mailto:contact@renov-facade-normandie.fr"
                className="group flex items-start gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#071522] text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                    Email
                  </p>
                  <p className="mt-1 font-semibold text-[#071522] transition-colors group-hover:text-[#f58213]">
                    contact@renov-facade-normandie.fr
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#071522] text-white">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-zinc-400">
                    Zone d'intervention
                  </p>
                  <p className="mt-1 font-semibold text-[#071522]">
                    Rouen · Évreux · Le Havre et alentours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-[#071522]/10 pt-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-xs font-bold uppercase tracking-[0.15em] text-[#071522]"
                >
                  Nom
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                  className="mt-3 w-full border-b border-[#071522]/20 bg-transparent px-0 py-3 text-[#071522] outline-none transition-colors placeholder:text-zinc-400 focus:border-[#f58213]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-bold uppercase tracking-[0.15em] text-[#071522]"
                >
                  Téléphone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="06 00 00 00 00"
                  className="mt-3 w-full border-b border-[#071522]/20 bg-transparent px-0 py-3 text-[#071522] outline-none transition-colors placeholder:text-zinc-400 focus:border-[#f58213]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#071522]"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="vous@exemple.fr"
                className="mt-3 w-full border-b border-[#071522]/20 bg-transparent px-0 py-3 text-[#071522] outline-none transition-colors placeholder:text-zinc-400 focus:border-[#f58213]"
              />
            </div>

            <div className="mt-6">
              <label
                htmlFor="project"
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#071522]"
              >
                Type de projet
              </label>

              <select
                id="project"
                name="project"
                defaultValue=""
                className="mt-3 w-full border-b border-[#071522]/20 bg-transparent px-0 py-3 text-[#071522] outline-none focus:border-[#f58213]"
              >
                <option value="" disabled>
                  Sélectionnez une prestation
                </option>
                <option value="ravalement">Ravalement de façade</option>
                <option value="isolation">Isolation extérieure</option>
                <option value="resine">Terrasse en résine</option>
                <option value="gouttieres">Gouttières</option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-xs font-bold uppercase tracking-[0.15em] text-[#071522]"
              >
                Votre projet
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Décrivez-nous votre projet..."
                className="mt-3 w-full resize-none border-b border-[#071522]/20 bg-transparent px-0 py-3 text-[#071522] outline-none transition-colors placeholder:text-zinc-400 focus:border-[#f58213]"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-8 inline-flex items-center gap-3 bg-[#f58213] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#d96f08]"
            >
              {isSending ? "Envoi en cours..." : "Envoyer ma demande"}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            {status && (
              <p className="mt-4 text-sm font-medium text-[#071522]">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
