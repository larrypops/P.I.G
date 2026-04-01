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
      <div className="panel-dark overflow-hidden px-8 py-10 text-white lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="eyebrow border-white/10 bg-white/[0.06] text-[var(--brand-light)]">
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
              <Link href={secondary.href} className="button-ghost">
                {secondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
