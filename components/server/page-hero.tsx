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
    <section className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="relative z-10">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-6 max-w-3xl text-balance font-display text-4xl font-semibold leading-[0.95] text-[var(--foreground)] sm:text-5xl lg:text-[4.25rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-[var(--muted)]">{description}</p>
          {(primaryCta || secondaryCta) ? (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCta ? (
                <Link href={primaryCta.href} className="button-primary">
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="button-secondary">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(183,138,51,0.24),transparent_68%)] blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(18,22,28,0.18),transparent_68%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/50 bg-[var(--surface-strong)] shadow-[var(--shadow-soft)]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(18,22,28,0.08))]" />
            <Image
              src={image}
              alt={imageAlt ?? title}
              width={1400}
              height={1000}
              className="h-full min-h-[320px] w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
