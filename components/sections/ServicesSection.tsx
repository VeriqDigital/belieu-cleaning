import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/Icons";
import { additionalServices, frequencyOptions, primaryServices } from "@/data/services";
import { siteConfig } from "@/config/site";

type ServicesSectionProps = {
  showAll?: boolean;
  headingAs?: "h1" | "h2";
};

const ServicesSection = ({ showAll = false, headingAs = "h2" }: ServicesSectionProps) => {
  const Heading = headingAs;
  const featured = primaryServices[0];
  const remaining = primaryServices.slice(1);

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
        <div>
          <p className="eyebrow">Cleaning services</p>
          <Heading className="mt-4 max-w-4xl font-display text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em] text-(--ink)">
            The right clean for the life you&apos;re living.
          </Heading>
        </div>
        <p className="max-w-xl text-lg leading-8 text-(--muted)">
          From weekly upkeep to a deep reset, a move, a guest turnover, or a commercial space, we start with the work that matters most to you.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6">
        <article className="group relative min-h-[29rem] overflow-hidden rounded-br-[5rem] bg-(--ink) sm:min-h-[37rem] sm:rounded-br-[8rem]">
          <Image src={featured.image} alt={featured.alt} fill className="object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 1023px) calc(100vw - 2rem), 650px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl italic text-(--pink)">01</span>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">The everyday essential</p>
            </div>
            <h3 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{featured.title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-white/75">{featured.description}</p>
            <a href={siteConfig.contact.phoneHref} className="mt-6 inline-flex min-h-11 items-center gap-2 font-bold text-white underline decoration-(--pink) decoration-2 underline-offset-4 hover:text-(--pink-soft)">
              Call / Text to talk through the job <ArrowIcon className="size-4" />
            </a>
          </div>
        </article>

        <div className="divide-y divide-(--border) border-y border-(--border)">
          {remaining.map((service, index) => (
            <article key={service.title} className="group grid grid-cols-[3rem_1fr] gap-4 py-6 sm:grid-cols-[4rem_1fr] sm:gap-5 sm:py-7">
              <span className="font-display text-2xl italic text-(--pink)">0{index + 2}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight text-(--ink) transition group-hover:text-(--pink) sm:text-3xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-(--muted)">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 grid overflow-hidden bg-(--pink-soft) lg:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-(--pink) p-6 text-white sm:p-9">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/75">Cleaning on your schedule</p>
          <h3 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">One time or recurring.</h3>
          <p className="mt-4 leading-7 text-white/80">Choose the rhythm that helps your home stay manageable. We&apos;ll confirm the details directly with you.</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4">
          {frequencyOptions.map((frequency) => (
            <li key={frequency} className="flex min-h-28 items-center justify-center border-b border-r border-white bg-(--ink) px-3 text-center font-display text-xl font-semibold text-white last:border-r-0 sm:min-h-full sm:text-2xl">
              {frequency}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">More ways we can help</p>
            <h3 className="mt-3 font-display text-4xl font-medium text-(--ink) sm:text-5xl">A little more breathing room.</h3>
          </div>
          <p className="max-w-md leading-7 text-(--muted)">Some messes call for more than a standard clean. Tell us what is going on, and we&apos;ll talk through the job.</p>
        </div>
        <div className="mt-8 grid border-l border-t border-(--border) md:grid-cols-2">
          {additionalServices.map((service, index) => (
            <article key={service.title} className="border-b border-r border-(--border) p-6 sm:p-8">
              <div className="flex items-start justify-between gap-5">
                <h4 className="font-display text-2xl font-semibold text-(--ink)">{service.title}</h4>
                <span className="font-display text-sm italic text-(--pink)">0{index + 1}</span>
              </div>
              <p className="mt-3 max-w-xl leading-7 text-(--muted)">{service.description}</p>
            </article>
          ))}
        </div>
      </div>

      {!showAll && (
        <div className="mt-10">
          <Button href="/services" variant="secondary">See Every Service</Button>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;
