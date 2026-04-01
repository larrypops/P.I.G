type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  compact?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  compact = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <span className={compact ? "kicker-line" : "eyebrow"}>{eyebrow}</span>
      <h2 className={`mt-5 text-balance font-display font-semibold leading-[1.02] text-[var(--foreground)] ${compact ? "text-[1.8rem] sm:text-[2.15rem] lg:text-[2.45rem]" : "text-[2rem] sm:text-[2.45rem] lg:text-[3.1rem]"}`}>
        {title}
      </h2>
      <p
        className={`mt-5 text-[1rem] leading-8 text-[var(--muted)] sm:text-[1.04rem] ${
          align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
