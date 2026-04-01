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
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-[var(--muted)]">{description}</p>
    </div>
  );
}
