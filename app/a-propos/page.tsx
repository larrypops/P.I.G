import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/client/reveal";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { aboutPillars, executiveLeaders, timeline, values } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "A propos",
  description:
    "Historique, positionnement, valeurs et repères institutionnels de la Police Internationale d'Intervention Generale.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="A propos"
        title="Une presentation construite autour de l'histoire, de la vocation et de la responsabilite institutionnelle."
        description="Cette page rassemble les repères de creation, la logique de positionnement et les elements de credibilite mis en avant dans le dossier source."
        image="/images/about/headquarters-inauguration-group.jpg"
        imageAlt="Photo de groupe devant le siege national"
        primaryCta={{ href: "/organisation", label: "Voir l'organisation" }}
        secondaryCta={{ href: "/contact", label: "Nous contacter" }}
      />

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/images/about/minat-group-photo.jpg"
                alt="Photo de groupe au siege national"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Positionnement"
              title="Un discours institutionnel ancre dans la protection, la veille et la coordination"
              description="Le contenu du site decrit la P.I.G comme une organisation qui cherche a articuler presence de terrain, discipline institutionnelle, cooperation et capacite de mediation."
            />
            <div className="mt-8 grid gap-4">
              {aboutPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[24px] border border-[var(--border)] bg-white px-5 py-5 shadow-[var(--shadow-card)]"
                >
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Vision de service"
              title="Une lecture axee sur la protection des personnes, l'encadrement et la prevention"
              description="Au-dela de l'historique, le site cherche a presenter une organisation responsable, dotee d'une mission de veille, d'assistance, d'information et de regulation."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="rounded-[24px] border border-[var(--border)] bg-white px-5 py-4 text-sm font-medium text-[var(--foreground)] shadow-[var(--shadow-card)]"
                >
                  {value}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[32px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                Direction generale
              </p>
              <div className="mt-5 grid gap-4">
                {executiveLeaders.map((leader) => (
                  <article
                    key={leader.name}
                    className="rounded-[24px] border border-[var(--border)] bg-[var(--surface)] px-5 py-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                      {leader.role}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                      {leader.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                      {leader.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Historique"
          title="Repères chronologiques"
          description="Cette frise restitue la creation de l'organisation et les phases de gouvernance mises en avant dans le dossier institutionnel."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {timeline.map((step, index) => (
            <Reveal key={step.period} delay={index * 90}>
              <article className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  {step.period}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/gouvernance"
            className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand-contrast)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-dark)]"
          >
            Approfondir la gouvernance
          </Link>
          <Link
            href="/galerie"
            className="rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            Voir les images documentaires
          </Link>
        </div>
      </section>
    </>
  );
}
