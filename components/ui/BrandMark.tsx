import Link from "next/link";

type BrandMarkProps = {
  light?: boolean;
  compact?: boolean;
};

const BrandMark = ({ light = false, compact = false }: BrandMarkProps) => (
  <Link
    href="/"
    aria-label="Belieu's Signature Cleaning Services home"
    className={`group inline-flex items-center gap-3 ${light ? "text-white" : "text-(--ink)"}`}
  >
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-(--gold)/45 bg-(--pink) font-display text-xl font-bold leading-none text-white shadow-[0_6px_20px_rgba(219,31,105,0.2)]"
    >
      B
    </span>
    <span className="leading-none">
      <span className="block font-display text-[1.35rem] font-semibold tracking-[-0.02em] group-hover:text-(--pink)">
        Belieu&apos;s
      </span>
      {!compact && (
        <span className={`mt-1 block text-[0.56rem] font-extrabold uppercase tracking-[0.2em] ${light ? "text-white/65" : "text-(--muted)"}`}>
          Signature Cleaning Services
        </span>
      )}
    </span>
  </Link>
);

export default BrandMark;
