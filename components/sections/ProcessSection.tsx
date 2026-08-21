const steps = [
  {
    title: "Tell Us What You Need",
    description: "Call, text, or send the basics about your space and the kind of help you are looking for.",
  },
  {
    title: "Get Your Personalized Plan",
    description: "We will talk through the scope, timing, and priorities before confirming your quote.",
  },
  {
    title: "Come Home to Clean",
    description: "We handle the work with care, so you can breathe easier in a space that feels fresh again.",
  },
] as const;

const ProcessSection = () => (
  <div className="text-white">
    <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-(--gold)">How it works</p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,8vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          Simple from the first <span className="italic text-(--pink)">hello.</span>
        </h2>
      </div>
      <p className="max-w-2xl text-lg leading-8 text-white/65 lg:justify-self-end">
        There is no complicated booking system or one-size-fits-all checklist. Start with a conversation about what would make the biggest difference.
      </p>
    </div>

    <ol className="mt-12 border-t border-white/15">
      {steps.map((step, index) => (
        <li key={step.title} className="grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[5rem_0.8fr_1.2fr] sm:items-center sm:gap-6 sm:py-9">
          <span className="font-display text-3xl italic text-(--pink)">0{index + 1}</span>
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">{step.title}</h3>
          <p className="max-w-xl leading-7 text-white/60">{step.description}</p>
        </li>
      ))}
    </ol>
  </div>
);

export default ProcessSection;
