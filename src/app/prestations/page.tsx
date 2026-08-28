import type { Metadata } from "next";
import { ServicesHero } from "@/components/prestations/ServicesHero";
import { ServicesGrid } from "@/components/prestations/ServicesGrid";
import { WhyUs } from "@/components/prestations/WhyUs";
import { ServicesCTA } from "@/components/prestations/ServicesCTA";

export const metadata: Metadata = {
  title: "Nos prestations | Renov'Façade Normandie",
  description:
    "Découvrez nos prestations de rénovation extérieure : ravalement de façade, isolation extérieure, terrasses en résine et gouttières en Normandie.",
};

export default function PrestationsPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesGrid />
      <WhyUs />
      <ServicesCTA />
    </main>
  );
}