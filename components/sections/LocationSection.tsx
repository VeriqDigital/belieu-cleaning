import Image from "next/image";
import Button from "@/components/ui/Button";
import { MapPinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/config/site";

const LocationSection = () => (
  <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
    <div className="flex flex-col justify-between bg-white p-6 sm:p-10 lg:p-12">
      <div>
        <span className="flex size-12 items-center justify-center rounded-full bg-(--pink-soft) text-(--pink)">
          <MapPinIcon className="size-6" />
        </span>
        <p className="eyebrow mt-8">Service area</p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,7vw,5.4rem)] font-medium leading-[0.92] tracking-[-0.04em] text-(--ink)">
          Proud to serve <span className="italic text-(--pink)">Central Iowa.</span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-(--muted)">
          Belieu&apos;s serves the Des Moines metro and surrounding Central Iowa communities. Because availability can vary by job and location, call or text to confirm service for your address.
        </p>
      </div>
      <div className="mt-9">
        <Button href={siteConfig.contact.smsHref} variant="secondary">Check Availability</Button>
      </div>
    </div>

    <div className="relative min-h-[28rem] overflow-hidden rounded-tr-[6rem] bg-(--ink) sm:min-h-[34rem] sm:rounded-tr-[10rem]">
      <Image src="/clean_room.jpg" alt="A freshly cleaned room in a Central Iowa home" fill className="object-cover object-center" sizes="(max-width: 1023px) calc(100vw - 2rem), 700px" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute inset-x-6 bottom-6 border-l-2 border-(--gold) pl-5 text-white sm:inset-x-9 sm:bottom-9">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/60">Based in the Des Moines market</p>
        <p className="mt-2 font-display text-3xl font-semibold">Local service. Direct communication.</p>
      </div>
    </div>
  </div>
);

export default LocationSection;
