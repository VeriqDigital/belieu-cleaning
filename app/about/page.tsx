import type { Metadata } from "next";
import AboutIntro from "@/components/sections/AboutIntro";
import ContactCtaSection from "@/components/sections/ContactCtaSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About Belieu's",
  description: "Learn about the local, owner-operated, judgment-free approach behind Belieu's Signature Cleaning Services in the Des Moines metro.",
};

const values = [
  { title: "Personal", description: "The conversation starts with your space, your circumstances, and the help that would matter most." },
  { title: "Respectful", description: "No lectures and no judgment. Your home and situation are treated with care." },
  { title: "Detailed", description: "Belieu's focuses on the small things that help a room feel truly fresh again." },
  { title: "Reliable", description: "Direct communication helps keep the plan, timing, and expectations clear." },
] as const;

export default function AboutPage() {
  return (
    <main>
      <Section tone="cream" className="pt-12 sm:pt-18"><AboutIntro headingAs="h1" /></Section>
      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">What guides the work</p>
            <h2 className="mt-4 font-display text-5xl font-medium leading-[0.95] text-(--ink) sm:text-6xl">Care you can feel in the room.</h2>
          </div>
          <div className="grid border-l border-t border-(--border) sm:grid-cols-2">
            {values.map((value, index) => (
              <article key={value.title} className="border-b border-r border-(--border) p-6 sm:p-8">
                <span className="font-display text-lg italic text-(--pink)">0{index + 1}</span>
                <h3 className="mt-8 font-display text-3xl font-semibold text-(--ink)">{value.title}</h3>
                <p className="mt-3 leading-7 text-(--muted)">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="cream"><ContactCtaSection /></Section>
    </main>
  );
}
