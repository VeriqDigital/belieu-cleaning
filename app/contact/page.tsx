import type { Metadata } from "next";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import LocationSection from "@/components/sections/LocationSection";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Get a Cleaning Quote",
  description: "Call or text Belieu's Signature Cleaning Services for a personalized cleaning quote in the Des Moines metro and Central Iowa.",
};

export default function ContactPage() {
  return (
    <main>
      <Section tone="dark" className="pt-12 sm:pt-18">
        <div className="grid gap-10 text-white lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-(--gold)">Contact Belieu&apos;s</p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,10vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.05em]">Let&apos;s get you a <span className="italic text-(--pink)">fresh start.</span></h1>
          </div>
          <div className="border-l-2 border-(--pink) pl-6">
            <p className="text-lg leading-8 text-white/65">Tell us the kind of space, what needs attention, and the general location. We&apos;ll talk through the job and next steps with you.</p>
            <a href={siteConfig.contact.phoneHref} className="mt-6 block font-display text-4xl font-semibold text-white hover:text-(--pink)">{siteConfig.contact.phone}</a>
            <div className="mt-6 flex flex-wrap gap-3"><Button href={siteConfig.contact.phoneHref}>Call Now</Button><Button href={siteConfig.contact.smsHref} variant="dark">Send a Text</Button></div>
          </div>
        </div>
      </Section>
      <Section tone="cream"><ContactCtaSection /></Section>
      <Section tone="blue"><LocationSection /></Section>
    </main>
  );
}
