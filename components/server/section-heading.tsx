type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-balance font-display text-[2rem] font-semibold leading-[1.02] text-[var(--foreground)] sm:text-[2.45rem] lg:text-[3.1rem]">
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
