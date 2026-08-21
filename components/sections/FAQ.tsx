"use client";

import { useState } from "react";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/config/site";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
      <div>
        <p className="eyebrow">Good to know</p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,7vw,5.25rem)] font-medium leading-[0.92] tracking-[-0.04em] text-(--ink)">
          Questions before we get started?
        </h2>
        <p className="mt-6 max-w-md leading-7 text-(--muted)">
          Every job is a little different. If your question is not covered here, call or text {siteConfig.contact.phone} and tell us what is going on.
        </p>
      </div>

      <div className="border-t border-(--ink)">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          const answerId = `faq-answer-${index}`;
          return (
            <div key={item.question} className="border-b border-(--border)">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex min-h-20 w-full cursor-pointer items-center justify-between gap-4 py-5 text-left font-display text-xl font-semibold text-(--ink) transition hover:text-(--pink) sm:text-2xl"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{item.question}</span>
                  <span aria-hidden="true" className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-(--ink) font-sans text-xl font-normal transition ${isOpen ? "rotate-45 bg-(--pink) text-white" : ""}`}>+</span>
                </button>
              </h3>
              <div id={answerId} hidden={!isOpen}>
                <p className="max-w-2xl pb-7 pr-6 leading-7 text-(--muted) sm:pr-14">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
