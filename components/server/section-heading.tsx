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
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.02] text-[var(--foreground)] sm:text-4xl lg:text-[2.9rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-[var(--muted)]">{description}</p>
    </div>
  );
}
