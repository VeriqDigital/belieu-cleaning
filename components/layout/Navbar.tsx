"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BrandMark from "@/components/ui/BrandMark";
import { navigation, siteConfig } from "@/config/site";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-black/8 bg-white/95 text-(--ink) shadow-[0_6px_25px_rgba(23,19,21,0.06)] backdrop-blur-md">
      <div className="bg-(--pink) px-4 py-2 text-center text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-white sm:text-xs">
        New clients: 25% off your first clean
      </div>
      <div className="mx-auto flex h-20 w-full max-w-(--container-width) items-center justify-between gap-6 px-4 sm:px-8 lg:px-10">
        <span className="lg:hidden"><BrandMark compact /></span>
        <span className="hidden lg:block"><BrandMark /></span>

        <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="min-h-11 content-center whitespace-nowrap text-sm font-bold transition hover:text-(--pink)">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.contact.phoneHref}
          className="hidden min-h-12 items-center rounded-full bg-(--ink) px-5 text-sm font-extrabold text-white transition hover:bg-(--pink) lg:inline-flex"
        >
          Call / Text {siteConfig.contact.phone}
        </a>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={siteConfig.contact.phoneHref} className="inline-flex min-h-11 items-center rounded-full bg-(--pink) px-4 text-xs font-extrabold text-white sm:text-sm">
            Call / Text
          </a>
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full border border-(--border) bg-white"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="grid gap-1.5" aria-hidden="true">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation-menu" className="fixed inset-x-0 bottom-0 top-[6.75rem] z-50 bg-black/50 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="border-t border-(--border) bg-white px-5 pb-7 pt-3 shadow-xl" onClick={(event) => event.stopPropagation()}>
            <nav aria-label="Mobile navigation" className="grid">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="min-h-13 content-center border-b border-(--border-warm) px-1 font-bold">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <a href={siteConfig.contact.smsHref} className="min-h-12 content-center rounded-full border border-(--ink) text-center text-sm font-extrabold">Text Us</a>
              <a href={siteConfig.contact.phoneHref} className="min-h-12 content-center rounded-full bg-(--pink) text-center text-sm font-extrabold text-white">Call Now</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
