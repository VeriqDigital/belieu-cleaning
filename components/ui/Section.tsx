import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  tone?: "cream" | "white" | "blue" | "dark";
  className?: string;
};

const Section = ({
  children,
  id,
  tone = "cream",
  className = "",
}: SectionProps) => {
  const tones = {
    cream: "bg-(--background)",
    white: "bg-white",
    blue: "bg-(--surface-soft)",
    dark: "bg-(--ink)",
  };

  return (
    <section
      id={id}
      className={`${tones[tone]} py-14 text-(--foreground) sm:py-22 lg:py-26 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
