import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

type AboutIntroProps = {
  headingAs?: "h1" | "h2";
};

const AboutIntro = ({ headingAs = "h2" }: AboutIntroProps) => {
  const Heading = headingAs;

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-16">
        <div>
          <p className="eyebrow">Cleaning without the judgment</p>
          <Heading className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,8vw,6.25rem)] font-medium leading-[0.92] tracking-[-0.045em] text-(--ink)">
            A fresh start should feel like <span className="italic text-(--pink)">relief.</span>
          </Heading>
        </div>
        <div className="border-l-2 border-(--pink) pl-5 text-base leading-7 text-(--muted)">
          <p className="font-bold text-(--ink)">{siteConfig.tagline}</p>
          <p className="mt-3">
            Life gets busy. Homes get lived in. Whatever brought you here, you can simply tell us what you need.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="relative min-h-[25rem] overflow-hidden rounded-tl-[5rem] bg-(--ink) sm:min-h-[34rem] sm:rounded-tl-[9rem]">
          <Image
            src="/owner_working.jpg"
            alt="The owner of Belieu's Signature Cleaning Services at work in a freshly cleaned room"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) calc(100vw - 2rem), 690px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <p className="absolute bottom-6 left-6 max-w-sm font-display text-2xl italic leading-tight text-white sm:bottom-8 sm:left-8 sm:text-3xl">
            Local, personal care from someone who understands that every home has a story.
          </p>
        </div>

        <div className="flex flex-col justify-between bg-(--ink) p-6 text-white sm:p-10 lg:p-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">Owner-operated service</p>
            <h3 className="mt-5 font-display text-4xl font-medium leading-[1.02] sm:text-5xl">
              You work with a real local person who cares about the result.
            </h3>
            <div className="mt-7 space-y-4 leading-7 text-white/70">
              <p>
                Belieu&apos;s is built around personal service, respectful communication, and attention to the details that make a space feel clean again.
              </p>
              <p>
                Whether you are overwhelmed, short on time, moving, managing a rental, or keeping a business ready, the conversation starts with what would help you most.
              </p>
            </div>
          </div>
          <div className="mt-9 flex flex-col gap-3 min-[430px]:flex-row lg:flex-col xl:flex-row">
            <Button href={siteConfig.contact.phoneHref}>Call / Text for a Quote</Button>
            <Button href="/about" variant="dark">About Belieu&apos;s</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
