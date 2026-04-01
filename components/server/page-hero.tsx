import Image from "next/image";
import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--brand)]">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{description}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand-contrast)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-dark)]"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_top_left,rgba(193,145,45,0.24),transparent_60%)]" />
          <div className="relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
