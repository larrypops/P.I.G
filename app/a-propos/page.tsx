import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { timeline } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "À propos",
  description:
    "Historique, positionnement et valeurs institutionnelles de la Police Internationale d'Intervention Générale.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Une organisation présentée comme structurée autour de la sécurité, de la veille et des droits humains."
        description="Cette page reprend l'historique, la vocation et les éléments de crédibilité mis en avant dans le dossier source, avec un ton clair et institutionnel."
        image="/images/about/headquarters-inauguration-group.jpg"
        imageAlt="Photo de groupe devant le siège national"
      />

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/images/about/minat-group-photo.jpg"
                alt="Photo de groupe au siège national"
                width={1200}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Présentation"
              title="Une vocation mondiale, un ancrage institutionnel clairement affiché"
              description="Le dossier décrit la P.I.G comme une organisation intervenant dans la recherche, le renseignement, la protection des droits humains, l'assistance d'urgence et la médiation. Le site s'appuie sur ces éléments pour construire un discours cohérent et crédible."
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                L'organisation met en avant une création datant du 21 décembre 1998 et se présente comme succédant au Haut Commissariat d'Intervention Générale.
              </p>
              <p>
                Le récit institutionnel repose sur une logique de gouvernance, de responsabilité, de coopération et de prévention, avec des références à la protection des personnes, des biens et des droits fondamentaux.
              </p>
              <p>
                Les visuels disponibles renforcent cette lecture : réunions stratégiques, portraits de responsables, présence de terrain et inauguration d'un siège national.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Historique"
          title="Repères chronologiques"
          description="Cette frise synthétise les étapes de gouvernance et d'évolution citées dans le dossier institutionnel."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {timeline.map((step, index) => (
            <Reveal key={step.period} delay={index * 90}>
              <article className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">{step.period}</p>
                <h2 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
