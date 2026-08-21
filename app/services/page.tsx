import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import ServicesSection from "@/components/sections/ServicesSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cleaning Services in Des Moines",
  description: "Explore house cleaning, deep cleaning, move-out cleaning, Airbnb cleaning, construction cleaning, and commercial cleaning in the Des Moines metro.",
};

export default function ServicesPage() {
  return (
    <main>
      <Section tone="white" className="pt-12 sm:pt-18"><ServicesSection showAll headingAs="h1" /></Section>
      <Section tone="cream"><ContactCtaSection /></Section>
    </main>
  );
}
