import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/config/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const defaultTitle =
  "Belieu's Signature Cleaning Services | Des Moines, Iowa";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "cleaning services Des Moines",
    "house cleaning Des Moines",
    "deep cleaning Des Moines",
    "move-out cleaning Des Moines",
    "commercial cleaning Des Moines",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 909, alt: "Belieu's Signature Cleaning Services - No judgment. Just a clean, fresh start." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belieu's Signature Cleaning Services | Des Moines",
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.contact.phone,
  areaServed: {
    "@type": "State",
    name: siteConfig.location.businessState,
  },
  makesOffer: [
    "Regular house cleaning",
    "Deep cleaning",
    "Move-in and move-out cleaning",
    "Airbnb and short-term rental cleaning",
    "Construction cleaning",
    "Commercial cleaning",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
          }}
        />
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
