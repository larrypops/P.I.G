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
    "Presentation institutionnelle de la Police Internationale d'Intervention Generale, de ses missions, de son organisation et de ses points de contact.",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--brand)]">
              Presentation institutionnelle
            </p>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Une organisation presentee autour de la protection, de la coordination et du service.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Le site de la P.I.G rassemble ses missions prioritaires, ses repères de gouvernance,
              ses actions documentees et les coordonnees utiles pour les demandes
              institutionnelles et partenariales.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/missions"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand-contrast)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-dark)]"
              >
                Explorer les missions
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                Contacter l'organisation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
                <Image
                  src="/images/hero/headquarters-team.jpg"
                  alt="Equipe rassemblee devant le siege national"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="space-y-5">
                <div className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-card)]">
                  <Image
                    src="/images/hero/logo-crest.jpg"
                    alt="Blason de la P.I.G"
                    width={1200}
                    height={1000}
                    className="h-56 w-full rounded-[22px] object-cover"
                  />
                </div>
                <div className="rounded-[30px] border border-[var(--border)] bg-[var(--foreground)] p-6 text-white shadow-[var(--shadow-card)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-light)]">
                    Lecture rapide
                  </p>
                  <p className="mt-4 text-lg leading-8 text-white/82">
                    Une vitrine institutionnelle pour comprendre la mission, l'organisation, la
                    chronologie et les relais de contact.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-grid pb-10">
        <Reveal>
          <StatGrid items={homeStats} />
        </Reveal>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Mission et positionnement"
          title="Les grands repères utiles pour comprendre l'institution"
          description="La page d'accueil concentre les informations essentielles sur la vocation, les preuves visuelles, la structure et les principaux axes d'action de la P.I.G."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="rounded-[30px] border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-card)]">
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

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/images/about/minat-group-photo.jpg"
                alt="Photo de groupe au siege national"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Ancrage institutionnel"
              title="Une lecture fondee sur la mission, la responsabilite et la preuve documentaire"
              description="Le contenu disponible permet de presenter l'organisation sans effet de surenchere, avec un ton institutionnel centre sur la lisibilite et la coherence."
            />
            <div className="mt-8 grid gap-4">
              {aboutPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[24px] border border-[var(--border)] bg-white px-5 py-5 shadow-[var(--shadow-card)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {pillar.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Missions prioritaires"
          title="Des domaines d'action complementaires"
          description="Les missions de la P.I.G sont presentees comme un ensemble coherent : veille, protection, mediation, sensibilisation et interventions organisees."
        />
        <div className="mt-10">
          <MissionGrid items={missions} />
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/missions"
            className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand-contrast)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-dark)]"
          >
            Voir le detail des missions
          </Link>
          <Link
            href="/actions"
            className="rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
          >
            Consulter les actions
          </Link>
        </div>
      </section>

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Direction generale"
              title="Une gouvernance centrale completee par des relais de terrain"
              description="Le site distingue la direction generale, les relais regionaux et les fonctions de representation pour donner une lecture plus claire des responsabilites."
            />
            <div className="mt-8 grid gap-4">
              {executiveLeaders.map((leader) => (
                <article
                  key={leader.name}
                  className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]"
                >
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
            <div className="rounded-[36px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <Image
                src={missionDetails[2].image}
                alt="Action de protection des consommateurs"
                width={1000}
                height={1000}
                className="h-full w-full rounded-[28px] object-cover"
              />
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
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
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Repères chronologiques"
          title="Des jalons de gouvernance depuis la creation"
          description="La chronologie aide a situer la structuration de l'organisation et la succession des phases de commandement mises en avant dans le dossier."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {timeline.map((step, index) => (
            <Reveal key={step.period} delay={index * 80}>
              <article className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] lg:h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  {step.period}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
