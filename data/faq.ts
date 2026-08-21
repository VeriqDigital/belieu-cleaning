import { siteConfig } from "@/config/site";

export const faqs = [
  {
    question: "What types of cleaning do you offer?",
    answer:
      "Belieu's offers regular house cleaning, deep cleaning, move-in and move-out cleaning, Airbnb and short-term rental cleaning, construction cleaning, one-time cleaning, and commercial cleaning and resets.",
  },
  {
    question: "Do you offer recurring cleaning?",
    answer:
      "Yes. Weekly, biweekly, and monthly cleaning are available, along with one-time cleans. Call or text to discuss the schedule that fits your home.",
  },
  {
    question: "Do you handle move-in and move-out cleans?",
    answer:
      "Yes. Belieu's provides cleaning for homes in transition, whether you are preparing to move in, finishing a move out, or getting a space ready for its next occupant.",
  },
  {
    question: "Do you clean Airbnb and short-term rentals?",
    answer:
      "Yes. Short-term rental cleaning is available to help reset the space between guests. Contact Belieu's to discuss your property and turnaround needs.",
  },
  {
    question: "Do you provide commercial cleaning?",
    answer:
      "Yes. Belieu's offers commercial cleaning and resets. Because every space is different, the scope is discussed before a quote is prepared.",
  },
  {
    question: "Can you help with organizing or junk removal?",
    answer:
      "Yes. Decluttering, organizing, and junk removal are among the additional ways Belieu's can help. Share what needs to be handled when you call or text.",
  },
  {
    question: "Do you offer one-time cleaning?",
    answer:
      "Yes. One-time cleaning is available for customers who need a single reset without setting up recurring service.",
  },
  {
    question: "How do I get a quote?",
    answer: `Call or text ${siteConfig.contact.phone}, email ${siteConfig.contact.email}, or use the quote form to share the type of space and what you need help with.`,
  },
  {
    question: "Are you insured?",
    answer: "Yes. Belieu's Signature Cleaning Services is insured.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Belieu's serves the Des Moines metro and surrounding Central Iowa communities. Contact the business directly to confirm availability for your location.",
  },
] as const;
