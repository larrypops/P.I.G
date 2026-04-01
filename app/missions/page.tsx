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
    "Decouvrez les principales missions de la P.I.G : renseignement, droits humains, protection des consommateurs, secours, mediation et formation.",
  path: "/missions",
});

export default function MissionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Missions"
        title="Des missions organisees pour prevenir, proteger, documenter et accompagner l'action."
        description="La P.I.G met en avant des champs d'action complementaires couvrant la veille, la protection, la mediation, la sensibilisation et l'intervention responsable."
        image="/images/actions/consumer-protection.jpg"
        imageAlt="Mission de protection des consommateurs"
        primaryCta={{ href: "/contact", label: "Contacter l'organisation" }}
        secondaryCta={{ href: "/actions", label: "Voir les actions documentees" }}
      />

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Vue d'ensemble"
          title="Un spectre d'intervention large mais coherent"
          description="Les missions se completent entre elles et dessinent une organisation attentive a la prevention, a la protection et a la coordination de terrain."
        />
        <div className="mt-10">
          <MissionGrid items={missions} />
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Detail des missions"
          title="Des domaines d'action presentes avec leur logique d'intervention"
          description="Chaque domaine s'inscrit dans une chaine de valeur institutionnelle qui va de l'observation a l'action, puis au suivi."
        />
        <div className="mt-10 space-y-6">
          {missionDetails.map((mission, index) => (
            <Reveal key={mission.title} delay={index * 70}>
              <article className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
                <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
                  <div className="relative min-h-[280px]">
                    <Image src={mission.image} alt={mission.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                      Domaine prioritaire
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold text-[var(--foreground)]">
                      {mission.title}
                    </h2>
                    <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                      {mission.description}
                    </p>
                    <ul className="mt-6 grid gap-3">
                      {mission.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-[20px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm leading-6 text-[var(--foreground)]"
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

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal>
            <div className="rounded-[36px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/operations/minat-follow-up.jpg"
                alt="Mission de suivi institutionnel avec les cadres du MINAT"
                width={1400}
                height={1050}
                className="h-full w-full rounded-[30px] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Methode"
              title="Une articulation entre terrain, coordination et tracabilite"
              description="Les actions visibles dans le dossier montrent une methode constante : observer, coordonner, deployer, suivre et rendre compte."
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                Les missions de la P.I.G ne se limitent pas a la seule presence terrain. Elles
                s'appuient sur des echanges, des reunions de cadrage et une logique de suivi
                institutionnel.
              </p>
              <p>
                Cette complementarite entre observation, regulation et representation donne au site
                une lecture plus structuree et plus credible des activites mises en avant.
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
