import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

type ContactCtaSectionProps = {
  onContactPage?: boolean;
};

const ContactCtaSection = ({ onContactPage = false }: ContactCtaSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-(--pink) text-white">
      <div aria-hidden="true" className="absolute -right-24 -top-24 size-72 rounded-full border-[40px] border-white/8" />
      <div className="relative grid lg:grid-cols-[1.25fr_0.75fr]">
        <div className="p-6 sm:p-10 lg:p-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-white/70">Ready for a fresh start?</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,8vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.045em]">
            Tell us what you need. <span className="italic">No judgment.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Whether it is one room, a whole home, a move, a rental, or a business reset, the first step is simply reaching out.
          </p>
        </div>

        <div className="flex flex-col justify-center border-t border-white/20 bg-(--ink) p-6 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-(--gold)">Call or text</p>
          <a href={siteConfig.contact.phoneHref} className="mt-3 font-display text-4xl font-semibold leading-none text-white hover:text-(--pink) sm:text-5xl">
            {siteConfig.contact.phone}
          </a>
          <div className="mt-8 flex flex-col gap-3">
            <Button href={siteConfig.contact.phoneHref}>Call / Text Now</Button>
            <Button href={onContactPage ? siteConfig.contact.smsHref : "/contact"} variant="dark">
              {onContactPage ? "Send a Text" : "Contact Belieu's"}
            </Button>
          </div>
          <a href={siteConfig.contact.emailHref} className="mt-6 break-all text-sm font-bold text-white/65 underline decoration-(--pink) decoration-2 underline-offset-4 hover:text-white">
            {siteConfig.contact.email}
          </a>
        </div>
      </div>

    </div>
  );
};

export default ContactCtaSection;
