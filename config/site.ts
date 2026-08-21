export const siteConfig = {
  name: "Belieu's Signature Cleaning Services",
  shortName: "Belieu's Signature Cleaning",
  owner: "Belieu's owner",
  tagline: "No judgment. Just a clean, fresh start.",
  description:
    "Local, insured house cleaning, deep cleaning, move-out cleaning, short-term rental cleaning, and commercial cleaning in the Des Moines metro and Central Iowa.",
  locale: "en_US",
  location: {
    businessCity: "Des Moines",
    businessState: "Iowa",
    serviceAreaLabel: "Des Moines metro & surrounding Central Iowa communities",
  },
  contact: {
    phone: "(515) 291-6594",
    phoneHref: "tel:+15152916594",
    smsHref: "sms:+15152916594",
    email: "sbelieu12@gmail.com",
    emailHref: "mailto:sbelieu12@gmail.com",
  },
} as const;

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Service Area", href: "/#service-area" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];
