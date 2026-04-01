import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { MissionGrid } from "@/components/server/mission-grid";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { missions } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Missions",
  description:
    "Découvrez les principales missions de la P.I.G : renseignement, droits humains, protection des consommateurs, secours, médiation et formation.",
  path: "/missions",
});

export default function MissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Missions"
        title="Des missions conçues pour prévenir, protéger, documenter et intervenir."
        description="La P.I.G met en avant des champs d'action complémentaires : recherche, renseignement, droits humains, protection des consommateurs, secours, médiation et formation."
        image="/images/missions/consumer-protection.jpg"
        imageAlt="Mission de protection des consommateurs"
        primaryCta={{ href: "/contact", label: "Contacter l'organisation" }}
        secondaryCta={{ href: "/galerie", label: "Voir les actions en images" }}
      />

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Actions prioritaires"
          title="Un spectre d'intervention large mais cohérent"
          description="Les contenus du dossier permettent d'organiser les missions en grands ensembles lisibles, avec une approche sobre et professionnelle."
        />
        <div className="mt-10">
          <MissionGrid items={missions} />
        </div>
      </section>

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal>
            <div className="rounded-[36px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/operations/strategy-meeting-wide.jpg"
                alt="Réunion stratégique des responsables"
                width={1400}
                height={1050}
                className="h-full w-full rounded-[30px] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Méthode"
              title="Une articulation entre terrain, coordination et sensibilisation"
              description="Le dossier montre une organisation qui souhaite concilier action opérationnelle, discipline institutionnelle et capacité d'information du public."
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                La mission de protection des consommateurs illustre une présence de terrain orientée vers le contrôle et la vigilance.
              </p>
              <p>
                Les réunions stratégiques et les visites institutionnelles suggèrent une gouvernance par coordination, revue des missions et suivi interne.
              </p>
              <p>
                La médiation, la formation et la prévention complètent l'approche en donnant au site une portée plus large qu'une simple vitrine sécuritaire.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
