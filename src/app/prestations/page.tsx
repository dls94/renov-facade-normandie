import { ServicesHero } from "@/components/prestations/ServicesHero";
import { ServicesGrid } from "@/components/prestations/ServicesGrid";
import { WhyUs } from "@/components/prestations/WhyUs";
import { ServicesCTA } from "@/components/prestations/ServicesCTA";

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