import Link from "next/link";

type CtaBannerProps = {
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

export function CtaBanner({
  title,
  description,
  primary,
  secondary,
}: CtaBannerProps) {
  return (
    <section className="container-shell section-gap">
      <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(135deg,#12161c_0%,#1d242c_56%,#2f2616_100%)] px-8 py-10 text-white shadow-[var(--shadow-soft)] lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="eyebrow border-white/10 bg-white/6 text-[var(--brand-light)]">
              Contact et partenariats
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.02] sm:text-4xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-white/72">{description}</p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link href={primary.href} className="button-primary">
              {primary.label}
            </Link>
            {secondary ? (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-[var(--brand-light)] hover:bg-white/8 hover:text-[var(--brand-light)]"
              >
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
