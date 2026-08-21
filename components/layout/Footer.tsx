import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import { footerLinks, siteConfig } from "@/config/site";
import { services } from "@/data/services";

const Footer = () => {
  return (
    <footer className="w-full bg-(--ink) text-white">
      <div className="mx-auto w-full max-w-(--container-width) px-5 py-14 sm:px-8 lg:px-10 lg:py-18">
        <div className="border-b border-white/15 pb-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div>
            <BrandMark light />
            <p className="mt-6 max-w-xl font-display text-3xl font-medium leading-tight sm:text-4xl">
              No judgment. Just a clean, <span className="italic text-(--pink)">fresh start.</span>
            </p>
          </div>
          <a href={siteConfig.contact.phoneHref} className="mt-8 inline-block font-display text-3xl font-semibold text-white hover:text-(--pink) sm:text-4xl lg:mt-0">
            {siteConfig.contact.phone}
          </a>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1fr]">
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">Belieu&apos;s Signature Cleaning Services</h2>
            <p className="mt-5 max-w-md leading-7 text-white/60">Local, insured residential and commercial cleaning with personal service across the Des Moines metro and surrounding Central Iowa communities.</p>
          </div>
          <nav aria-label="Cleaning services">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">Cleaning</h2>
            <ul className="mt-4 grid gap-2 text-sm font-semibold text-white/60">
              {services.map((service) => <li key={service.title}><Link href="/services" className="inline-flex min-h-9 items-center hover:text-white">{service.shortTitle}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">Explore</h2>
            <ul className="mt-4 grid gap-2 text-sm font-semibold text-white/60">
              {footerLinks.map((link) => <li key={link.label}><Link href={link.href} className="inline-flex min-h-9 items-center hover:text-white">{link.label}</Link></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">Contact</h2>
            <address className="mt-4 text-sm not-italic leading-7 text-white/60">
              <p>Des Moines Metro</p>
              <p>Central Iowa</p>
              <a href={siteConfig.contact.smsHref} className="mt-3 block min-h-9 content-center font-bold text-white hover:text-(--pink)">Text {siteConfig.contact.phone}</a>
              <a href={siteConfig.contact.emailHref} className="block min-h-9 content-center break-all font-bold text-white hover:text-(--pink)">{siteConfig.contact.email}</a>
            </address>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 text-xs leading-6 text-white/40 sm:flex sm:justify-between sm:gap-8">
          <div>
            <p>Website demo. Final launch details must be confirmed before publishing to the business domain.</p>
            <p className="mt-1">&copy; 2026 {siteConfig.name}. Iowa.</p>
          </div>
          <p className="mt-3 shrink-0 sm:mt-0">Website designed by <Link href="https://www.veriqdigital.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/60 hover:text-white">Veriq Digital</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
