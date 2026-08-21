"use client";

import type { FormEvent } from "react";
import { siteConfig } from "@/config/site";

export type ModalType = "service" | "contact";

const modalContent = {
  service: {
    eyebrow: "Personalized quote",
    title: "Tell Us What You Need",
    submitLabel: "Prepare My Request",
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Send Belieu's a Message",
    submitLabel: "Prepare My Message",
  },
} as const;

type LeadModalProps = {
  activeModal: ModalType;
  hasSubmitted: boolean;
  isSubmitting: boolean;
  onClose: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  submitError: string;
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-sm font-bold text-(--ink)">{children}</label>
);

const LeadModal = ({ activeModal, hasSubmitted, isSubmitting, onClose, onSubmit, submitError }: LeadModalProps) => {
  const content = modalContent[activeModal];
  const isQuote = activeModal === "service";

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/80 px-4 py-5 backdrop-blur-sm sm:py-8" role="presentation" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${activeModal}-form-title`}
        className="max-h-[calc(100vh-2.5rem)] w-full max-w-3xl overflow-y-auto bg-(--background) p-5 text-(--foreground) shadow-(--shadow-lg) sm:max-h-[calc(100vh-4rem)] sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-7 flex items-start justify-between gap-4 border-b border-(--border) pb-6">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 id={`${activeModal}-form-title`} className="mt-2 font-display text-4xl font-semibold leading-tight text-(--ink) sm:text-5xl">
              {content.title}
            </h2>
          </div>
          <button type="button" onClick={onClose} autoFocus className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--ink) bg-white text-2xl leading-none transition hover:border-(--pink) hover:bg-(--pink) hover:text-white" aria-label={`Close ${content.title.toLowerCase()} form`}>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {hasSubmitted ? (
          <div className="border-l-4 border-(--pink) bg-white p-6" aria-live="polite">
            <p className="font-display text-2xl font-semibold text-(--ink)">Your request details are ready.</p>
            <p className="mt-3 leading-7 text-(--muted)">
              Online form delivery is not connected in this demo. To make sure Belieu&apos;s receives your request, call or text {siteConfig.contact.phone}, or email {siteConfig.contact.email}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={siteConfig.contact.phoneHref} className="min-h-11 content-center rounded-full bg-(--pink) px-5 text-sm font-extrabold text-white">Call {siteConfig.contact.phone}</a>
              <a href={siteConfig.contact.smsHref} className="min-h-11 content-center rounded-full border border-(--ink) px-5 text-sm font-extrabold text-(--ink)">Send a Text</a>
            </div>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit} data-email-subject={isQuote ? siteConfig.forms.quoteSubject : siteConfig.forms.contactSubject}>
            {!siteConfig.forms.deliveryConfigured && (
              <div className="border-l-4 border-(--gold) bg-white p-4 text-sm leading-6 text-(--muted)">
                <p className="font-bold text-(--ink)">This demo form is not connected for delivery yet.</p>
                <p className="mt-1">For immediate contact, call or text <a href={siteConfig.contact.phoneHref} className="font-bold text-(--pink) underline">{siteConfig.contact.phone}</a>.</p>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Label>Name <span className="text-(--pink)">*</span><input required name="name" autoComplete="name" className="field mt-2" placeholder="Your name" /></Label>
              <Label>Phone <span className="text-(--pink)">*</span><input required name="phone" type="tel" autoComplete="tel" className="field mt-2" placeholder="Your phone number" /></Label>
              <Label>Email<input type="email" name="email" autoComplete="email" className="field mt-2" placeholder="you@example.com" /></Label>
              <Label>Preferred contact method<select name="preferredContactMethod" defaultValue="text" className="field mt-2"><option value="text">Text message</option><option value="call">Phone call</option><option value="email">Email</option></select></Label>
            </div>

            {isQuote && (
              <div className="grid gap-5 border-t border-(--border) pt-5 sm:grid-cols-2">
                <Label>Type of space <span className="text-(--pink)">*</span><select required name="spaceType" defaultValue="" className="field mt-2"><option value="" disabled>Choose your space</option><option value="house">House</option><option value="apartment">Apartment / condo</option><option value="short-term-rental">Airbnb / short-term rental</option><option value="commercial">Commercial space</option><option value="other">Other</option></select></Label>
                <Label>General location<input name="generalLocation" autoComplete="address-level2" className="field mt-2" placeholder="City or nearby community" /></Label>
                <Label>Desired service<select name="desiredService" defaultValue="regular-house" className="field mt-2"><option value="regular-house">Regular House Cleaning</option><option value="deep">Deep Cleaning</option><option value="move">Move-In / Move-Out Cleaning</option><option value="short-term-rental">Airbnb / Short-Term Rental</option><option value="construction">Construction Cleaning</option><option value="commercial">Commercial Cleaning / Reset</option><option value="organizing">Organizing / Decluttering</option><option value="junk">Junk Removal</option><option value="water">Water Cleanup</option><option value="dog">Dog Walking / Potty Breaks</option><option value="other">Something Else</option></select></Label>
                <Label>Preferred frequency<select name="preferredFrequency" defaultValue="not-sure" className="field mt-2"><option value="one-time">One-time</option><option value="weekly">Weekly</option><option value="biweekly">Biweekly</option><option value="monthly">Monthly</option><option value="not-sure">Not sure</option></select></Label>
              </div>
            )}

            <Label>{isQuote ? "What would you like help with?" : "Message"}<textarea name="cleaningDetails" rows={5} className="field mt-2 min-h-32 resize-y" placeholder={isQuote ? "Share the spaces, priorities, current condition, timing, or anything else that would help us understand the job." : "What would you like Belieu's to know?"} /></Label>
            <p className="text-xs leading-5 text-(--muted)">Fields marked with an asterisk are required. Service details and availability are confirmed directly with Belieu&apos;s.</p>

            <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:justify-end">
              <button type="button" onClick={onClose} disabled={isSubmitting} className="min-h-12 cursor-pointer rounded-full border border-(--ink) bg-white px-6 text-sm font-extrabold text-(--ink) hover:bg-(--surface-soft)">Cancel</button>
              <button type="submit" disabled={isSubmitting} className="min-h-12 cursor-pointer rounded-full bg-(--pink) px-6 text-sm font-extrabold text-white transition hover:bg-(--pink-dark)">{isSubmitting ? "Preparing…" : content.submitLabel}</button>
            </div>
            {submitError && <p className="text-sm font-semibold text-red-700" aria-live="polite">{submitError}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default LeadModal;
