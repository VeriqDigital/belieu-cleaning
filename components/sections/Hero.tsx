import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const Hero = () => (
  <section className="relative overflow-hidden bg-(--ink) pb-8 pt-12 text-white sm:pb-10 sm:pt-16 lg:pt-20">
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-(--gold) to-transparent opacity-60" />
    <Container className="relative">
      <div className="mx-auto max-w-5xl text-center">
        <p className="flex items-center justify-center gap-3 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
          <span aria-hidden="true" className="hidden h-px w-8 bg-(--gold) sm:block" />
          Des Moines metro cleaning
          <span aria-hidden="true" className="hidden h-px w-8 bg-(--gold) sm:block" />
        </p>
        <h1 className="mt-6 font-display text-[clamp(3.6rem,13vw,8.6rem)] font-medium leading-[0.82] tracking-[-0.055em]">
          Come home
          <span className="block italic text-(--pink)">to clean.</span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
          Reliable residential and commercial cleaning with a personal touch. Tell us what feels overwhelming, and we&apos;ll help you get your fresh start.
        </p>
        <p className="mt-5 font-display text-xl italic text-white sm:text-2xl">
          No judgment. Just a clean, fresh start.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 min-[430px]:flex-row">
          <Button href={siteConfig.contact.phoneHref} className="min-[430px]:min-w-56">
            Call / Text {siteConfig.contact.phone}
          </Button>
          <Button href="/#services" variant="dark" className="min-[430px]:min-w-40">
            Explore Services
          </Button>
        </div>
        <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.12em] text-white/62 sm:text-sm">
          <li>Local</li>
          <li aria-hidden="true" className="text-(--gold)">•</li>
          <li>Insured</li>
          <li aria-hidden="true" className="text-(--gold)">•</li>
          <li>Reliable</li>
          <li aria-hidden="true" className="text-(--gold)">•</li>
          <li>Detailed</li>
        </ul>
      </div>

      <div className="relative mt-11 sm:mt-14">
        <div className="relative aspect-[5/4] overflow-hidden rounded-t-[8rem] border border-white/15 bg-(--ink-soft) sm:aspect-[16/8] sm:rounded-t-[14rem] lg:aspect-[16/6.4]">
          <Image
            src="/livingroom.jpg"
            alt="A freshly cleaned and carefully arranged living room"
            fill
            preload
            className="object-cover object-center"
            sizes="(max-width: 1280px) calc(100vw - 2rem), 1200px"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/8" />
          <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
            <div className="rounded-sm bg-white/94 px-4 py-3 text-left text-(--ink) shadow-lg backdrop-blur-sm sm:px-5">
              <p className="text-[0.65rem] font-extrabold uppercase tracking-[0.17em] text-(--pink)">New client offer</p>
              <p className="mt-1 font-display text-xl font-semibold sm:text-2xl">25% off your first clean</p>
            </div>
            <div className="hidden items-center gap-3 rounded-full border border-white/20 bg-black/55 p-2 pr-5 backdrop-blur-sm sm:flex">
              <span className="relative size-12 overflow-hidden rounded-full border-2 border-white/80">
                <Image src="/owner.jpg" alt="Owner of Belieu's Signature Cleaning Services" fill className="object-cover" sizes="48px" />
              </span>
              <p className="max-w-40 text-left text-xs font-bold leading-5 text-white">Owner-operated care from a real local business</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Hero;
