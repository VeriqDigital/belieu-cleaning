import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  href?: string;
  newTab?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

const Button = ({
  children,
  variant = "primary",
  href,
  newTab,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border px-5 py-3 text-center font-heading text-sm font-extrabold tracking-[0.02em] transition-all focus-visible:outline-3 focus-visible:outline-offset-3 sm:px-6 disabled:cursor-not-allowed disabled:opacity-60";

  const variantClasses = {
    primary:
      "border-(--pink) bg-(--pink) text-white shadow-[0_8px_24px_rgba(219,31,105,0.28)] hover:-translate-y-0.5 hover:border-(--pink-dark) hover:bg-(--pink-dark) hover:text-white",
    secondary:
      "border-(--ink) bg-white text-(--ink) hover:-translate-y-0.5 hover:border-(--pink) hover:bg-(--pink-soft) hover:text-(--pink-dark)",
    dark:
      "border-(--subtle-on-dark) bg-transparent text-(--text-on-dark) hover:border-(--text-on-dark) hover:bg-white hover:text-(--navy)",
    light:
      "border-white bg-white text-(--navy) shadow-[0_8px_20px_rgba(6,40,68,0.22)] hover:-translate-y-0.5 hover:border-(--blue-light) hover:bg-(--blue-light) hover:text-(--navy-deep)",
  };

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
