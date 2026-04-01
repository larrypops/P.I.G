import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { CtaBanner } from "@/components/server/cta-banner";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { actionStories } from "@/lib/site-data";

const method = [
  "Observation et collecte d'informations",
  "Coordination avec les parties prenantes",
  "Déploiement ou suivi de terrain selon les besoins",
  "Documentation et formulation de recommandations",
];

export const metadata = createPageMetadata({
  title: "Actions et actualités",
  description:
    "Retrouvez les actions récentes de la P.I.G : réunions stratégiques, suivi institutionnel, protection des consommateurs et inauguration du siège national.",
  path: "/actions",
});

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Actions"
        title="Des actions documentées pour illustrer la coordination, le terrain et l'ancrage institutionnel."
        description="À partir des visuels et informations du dossier, cette page rassemble plusieurs temps forts représentatifs de l'activité et de la présence institutionnelle de la P.I.G."
        image="/images/actions/minat-visit-2.jpg"
        imageAlt="Mission de suivi institutionnel"
        primaryCta={{ href: "/galerie", label: "Voir la galerie" }}
        secondaryCta={{ href: "/contact", label: "Prendre contact" }}
      />

      <section className="container-shell section-gap">
        <SectionHeading
          eyebrow="Temps forts"
          title="Des séquences d'action restituées avec davantage de contexte"
          description="Chaque bloc relie une image à un contexte, une temporalité et une finalité institutionnelle afin d'éviter l'effet de simple galerie décorative."
        />
        <div className="mt-10 space-y-6">
          {actionStories.map((story, index) => (
            <Reveal key={story.title} delay={index * 70}>
              <article className="panel overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[0.48fr_0.52fr]">
                  <div className="relative min-h-[320px]">
                    <Image src={story.image} alt={story.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                      <span>{story.tag}</span>
                      <span>{story.context}</span>
                      <span>{story.date}</span>
                    </div>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--foreground)]">
                      {story.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-[var(--muted)]">{story.excerpt}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="panel p-8 lg:p-10">
              <SectionHeading
                eyebrow="Méthode d'intervention"
                title="Une approche fondée sur la coordination, la rigueur et la traçabilité"
                description="Les actions mises en avant dans le dossier révèlent une logique commune de préparation, de déploiement, d'échange et de suivi."
              />
              <ul className="mt-8 grid gap-4">
                {method.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-7 text-[var(--foreground)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="media-frame">
              <Image
                src="/images/hero/headquarters.jpg"
                alt="Façade du siège national"
                width={1200}
                height={1000}
                className="aspect-[4/3.6] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Échanger avec la P.I.G à propos d'une action, d'une représentation ou d'un partenariat"
        description="Utilisez la page contact pour joindre le bureau France ou le bureau Afrique et préparer un échange adapté à votre besoin."
        primary={{ href: "/contact", label: "Nous contacter" }}
      />
    </>
  );
}
