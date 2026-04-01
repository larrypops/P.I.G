import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/client/reveal";
import { MissionGrid } from "@/components/server/mission-grid";
import { SectionHeading } from "@/components/server/section-heading";
import { StatGrid } from "@/components/server/stat-grid";
import { createMetadata } from "@/lib/metadata";
import {
  aboutPillars,
  executiveLeaders,
  highlights,
  homeStats,
  missionDetails,
  missions,
  timeline,
  values,
} from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "Présentation institutionnelle de la Police Internationale d'Intervention Générale, de ses missions, de son organisation et de ses points de contact.",
});

export default function HomePage() {
  return (
    <>
      <section className="section-gap relative overflow-hidden pt-10 sm:pt-12">
        <div className="container-shell grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-center lg:gap-14">
          <Reveal className="relative z-10">
            <span className="eyebrow">Présentation institutionnelle</span>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-[2.9rem] font-semibold leading-[0.94] text-[var(--foreground)] sm:text-[4.1rem] lg:text-[5.35rem]">
              Une organisation présentée autour de la protection, de la coordination et du service.
            </h1>
            <p className="mt-6 prose-readable text-[1.05rem] leading-8 text-[var(--muted)] sm:text-[1.1rem]">
              Le site de la P.I.G rassemble ses missions prioritaires, ses repères de gouvernance,
              ses actions documentées et les coordonnées utiles pour les demandes
              institutionnelles et partenariales.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link href="/missions" className="button-primary">
                Explorer les missions
              </Link>
              <Link href="/contact" className="button-secondary">
                Contacter l'organisation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="media-frame">
                <Image
                  src="/images/hero/headquarters-team.jpg"
                  alt="Équipe rassemblée devant le siège national"
                  width={1600}
                  height={1200}
                  className="aspect-[4/4.6] w-full object-cover md:aspect-[4/5]"
                  priority
                />
              </div>
              <div className="grid gap-4">
                <div className="panel-muted rounded-[1.8rem] p-4">
                  <Image
                    src="/images/hero/logo-crest.jpg"
                    alt="Blason de la P.I.G"
                    width={1200}
                    height={1000}
                    className="aspect-[4/3] w-full rounded-[1.4rem] object-cover"
                  />
                </div>
                <div className="panel-dark flex flex-col justify-between gap-4 p-6 text-white">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-light)]">
                      Lecture rapide
                    </p>
                    <p className="mt-4 text-base leading-8 text-white/78">
                      Une vitrine institutionnelle pour comprendre la mission, l'organisation, la
                      chronologie et les relais de contact.
                    </p>
                  </div>
                  <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                      Objectif du site
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Offrir un parcours lisible, crédible et cohérent à tous les visiteurs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-tight pt-0">
        <Reveal>
          <StatGrid items={homeStats} />
        </Reveal>
      </section>

      <section className="container-shell section-gap">
        <SectionHeading
          eyebrow="Mission et positionnement"
          title="Les grands repères utiles pour comprendre l'institution"
          description="La page d'accueil concentre les informations essentielles sur la vocation, les preuves visuelles, la structure et les principaux axes d'action de la P.I.G."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="panel-muted rounded-[1.85rem] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  {item.kicker}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="media-frame">
              <Image
                src="/images/about/minat-group-photo.jpg"
                alt="Photo de groupe au siège national"
                width={1200}
                height={900}
                className="aspect-[4/3.4] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Ancrage institutionnel"
              title="Une lecture fondée sur la mission, la responsabilité et la preuve documentaire"
              description="Le contenu disponible permet de présenter l'organisation sans effet de surenchère, avec un ton institutionnel centré sur la lisibilité et la cohérence."
            />
            <div className="mt-8 grid gap-4">
              {aboutPillars.map((pillar) => (
                <article key={pillar.title} className="panel-muted rounded-[1.5rem] px-5 py-5">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{pillar.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Missions prioritaires"
          title="Des domaines d'action complémentaires"
          description="Les missions de la P.I.G sont présentées comme un ensemble cohérent : veille, protection, médiation, sensibilisation et interventions organisées."
        />
        <div className="mt-10">
          <MissionGrid items={missions} />
        </div>
        <div className="mt-8 flex flex-wrap gap-3.5">
          <Link href="/missions" className="button-primary">
            Voir le détail des missions
          </Link>
          <Link href="/actions" className="button-secondary">
            Consulter les actions
          </Link>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Direction générale"
              title="Une gouvernance centrale complétée par des relais de terrain"
              description="Le site distingue la direction générale, les relais régionaux et les fonctions de représentation pour donner une lecture claire des responsabilités."
            />
            <div className="mt-8 grid gap-4">
              {executiveLeaders.map((leader) => (
                <article key={leader.name} className="panel-muted rounded-[1.7rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                    {leader.role}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                    {leader.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {leader.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="panel-muted rounded-[2rem] p-5">
              <Image
                src={missionDetails[2].image}
                alt="Action de protection des consommateurs"
                width={1000}
                height={1000}
                className="aspect-[4/3.25] w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value}
                  className="panel-muted rounded-[1.4rem] px-5 py-4 text-sm font-medium text-[var(--foreground)]"
                >
                  {value}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Repères chronologiques"
          title="Des jalons de gouvernance depuis la création"
          description="La chronologie aide à situer la structuration de l'organisation et la succession des phases de commandement mises en avant dans le dossier."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {timeline.map((step, index) => (
            <Reveal key={step.period} delay={index * 80}>
              <article className="panel-muted h-full rounded-[1.7rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  {step.period}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
