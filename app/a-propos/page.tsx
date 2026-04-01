import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/client/reveal";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { aboutPillars, executiveLeaders, timeline, values } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Historique, positionnement, valeurs et repères institutionnels de la Police Internationale d'Intervention Générale.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une présentation construite autour de l'histoire, de la vocation et de la responsabilité institutionnelle."
        description="Cette page rassemble les repères de création, la logique de positionnement et les éléments de crédibilité mis en avant dans le dossier source."
        image="/images/about/headquarters-inauguration-group.jpg"
        imageAlt="Photo de groupe devant le siège national"
        primaryCta={{ href: "/organisation", label: "Voir l'organisation" }}
        secondaryCta={{ href: "/contact", label: "Nous contacter" }}
        variant="narrative"
      />

      <section className="container-shell section-gap">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="media-frame">
              <Image
                src="/images/about/minat-group-photo.jpg"
                alt="Photo de groupe au siège national"
                width={1200}
                height={1200}
                className="aspect-[4/4.2] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Positionnement"
              title="Un discours institutionnel ancré dans la protection, la veille et la coordination"
              description="Le contenu du site décrit la P.I.G comme une organisation qui cherche à articuler présence de terrain, discipline institutionnelle, coopération et capacité de médiation."
            />
            <div className="mt-8 grid gap-4">
              {aboutPillars.map((pillar) => (
                <article key={pillar.title} className="panel-muted rounded-[1.5rem] px-5 py-5">
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="panel-elevated grid gap-8 rounded-[2.1rem] px-6 py-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <Reveal variant="soft">
            <div>
              <SectionHeading
                eyebrow="Lecture en trois temps"
                title="Une organisation racontée par son ancrage, son cadre d'action et sa continuité."
                description="Cette section synthétise la manière dont le site structure le récit institutionnel sans rompre avec le ton documentaire du projet."
                compact
              />
              <div className="mt-7 grid gap-4">
                <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/80 px-5 py-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Ancrage</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Le siège, les portraits et les images de groupe établissent une présence tangible.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/80 px-5 py-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Méthode</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    Le vocabulaire de la veille, de la protection et de la médiation structure l'ensemble du site.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/80 px-5 py-4">
                  <p className="text-sm font-semibold text-[var(--foreground)]">Continuité</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    La chronologie et la gouvernance apportent profondeur et crédibilité au récit.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="media-frame rounded-[1.9rem]">
              <Image
                src="/images/about/minat-session.jpg"
                alt="Séance institutionnelle de travail"
                width={1400}
                height={1050}
                className="aspect-[4/3.4] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Vision de service"
              title="Une lecture axée sur la protection des personnes, l'encadrement et la prévention"
              description="Au-delà de l'historique, le site présente une organisation responsable, dotée d'une mission de veille, d'assistance, d'information et de régulation."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="panel-muted rounded-[1.35rem] px-5 py-4 text-sm font-medium text-[var(--foreground)]"
                >
                  {value}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="panel-muted rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                Direction générale
              </p>
              <div className="mt-5 grid gap-4">
                {executiveLeaders.map((leader) => (
                  <article
                    key={leader.name}
                    className="rounded-[1.4rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-5"
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

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Historique"
          title="Repères chronologiques"
          description="Cette frise restitue la création de l'organisation et les phases de gouvernance mises en avant dans le dossier institutionnel."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {timeline.map((step, index) => (
            <Reveal key={step.period} delay={index * 90}>
              <article className="panel-muted h-full rounded-[1.7rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  {step.period}
                </p>
                <h2 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <Link href="/gouvernance" className="button-primary">
            Approfondir la gouvernance
          </Link>
          <Link href="/galerie" className="button-secondary">
            Voir les images documentaires
          </Link>
        </div>
      </section>
    </>
  );
}
