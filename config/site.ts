import type { ModalType } from "@/components/layout/LeadModal";

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
  forms: {
    // TODO: Connect form delivery before launch.
    recipientEmail: "sbelieu12@gmail.com",
    quoteSubject: "New cleaning quote request for Belieu's Signature Cleaning Services",
    contactSubject: "New website message for Belieu's Signature Cleaning Services",
    deliveryConfigured: false,
  },
} as const;

export type NavItem =
  | { label: string; href: string }
  | { label: string; modal: ModalType };

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
  { label: "Request a Quote", modal: "service" },
];

export const primaryCta = {
  label: "Get a Quote",
  modal: "service",
} as const satisfies { label: string; modal: ModalType };
