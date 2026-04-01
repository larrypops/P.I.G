import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { MissionGrid } from "@/components/server/mission-grid";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { missionDetails, missions } from "@/lib/site-data";

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
        title="Des missions organisées pour prévenir, protéger, documenter et accompagner l'action."
        description="La P.I.G met en avant des champs d'action complémentaires couvrant la veille, la protection, la médiation, la sensibilisation et l'intervention responsable."
        image="/images/actions/consumer-protection.jpg"
        imageAlt="Mission de protection des consommateurs"
        primaryCta={{ href: "/contact", label: "Contacter l'organisation" }}
        secondaryCta={{ href: "/actions", label: "Voir les actions documentées" }}
      />

      <section className="container-shell section-gap">
        <SectionHeading
          eyebrow="Vue d'ensemble"
          title="Un spectre d'intervention large mais cohérent"
          description="Les missions se complètent entre elles et dessinent une organisation attentive à la prévention, à la protection et à la coordination de terrain."
        />
        <div className="mt-10">
          <MissionGrid items={missions} />
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Détail des missions"
          title="Des domaines d'action présentés avec leur logique d'intervention"
          description="Chaque domaine s'inscrit dans une chaîne de valeur institutionnelle qui va de l'observation à l'action, puis au suivi."
        />
        <div className="mt-10 space-y-6">
          {missionDetails.map((mission, index) => (
            <Reveal key={mission.title} delay={index * 70}>
              <article className="panel-muted overflow-hidden rounded-[2rem]">
                <div className={`grid gap-0 ${index % 2 === 0 ? "lg:grid-cols-[0.42fr_0.58fr]" : "lg:grid-cols-[0.58fr_0.42fr]"}`}>
                  <div className={`relative min-h-[280px] ${index % 2 === 0 ? "" : "lg:order-last"}`}>
                    <Image src={mission.image} alt={mission.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                      Domaine prioritaire
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--foreground)]">
                      {mission.title}
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-[var(--muted)]">{mission.description}</p>
                    <ul className="mt-6 grid gap-3">
                      {mission.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-[1.1rem] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-6 text-[var(--foreground)]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal>
            <div className="panel-muted rounded-[2rem] p-5">
              <Image
                src="/images/operations/minat-follow-up.jpg"
                alt="Mission de suivi institutionnel avec les cadres du MINAT"
                width={1400}
                height={1050}
                className="aspect-[4/3.1] w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Méthode"
              title="Une articulation entre terrain, coordination et traçabilité"
              description="Les actions visibles dans le dossier montrent une méthode constante : observer, coordonner, déployer, suivre et rendre compte."
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                Les missions de la P.I.G ne se limitent pas à la seule présence terrain. Elles
                s'appuient sur des échanges, des réunions de cadrage et une logique de suivi
                institutionnel.
              </p>
              <p>
                Cette complémentarité entre observation, régulation et représentation donne au site
                une lecture plus structurée et plus crédible des activités mises en avant.
              </p>
              <p>
                Les pages Actions, Gouvernance et Contact prolongent cette lecture en montrant les
                preuves documentaires, les relais organisationnels et les canaux de mise en
                relation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
