import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/client/reveal";
import { MissionGrid } from "@/components/server/mission-grid";
import { SectionHeading } from "@/components/server/section-heading";
import { StatGrid } from "@/components/server/stat-grid";
import { createMetadata } from "@/lib/metadata";
import { highlights, homeStats, missions, timeline, values } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "Présentation institutionnelle de la Police Internationale d'Intervention Générale, de ses missions et de son organisation.",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--brand)]">
              Organisation active et responsable
            </p>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[0.95] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Une vitrine institutionnelle au service des droits, de la sécurité et de l'action coordonnée.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              La Police Internationale d'Intervention Générale présente ses missions, sa structure hiérarchique, ses actions de terrain et ses points de contact dans une interface claire, contemporaine et crédible.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/missions"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-[var(--brand-contrast)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-dark)]"
              >
                Découvrir les missions
              </Link>
              <Link
                href="/organisation"
                className="rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                Voir l'organisation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
                <Image
                  src="/images/hero/headquarters-team.jpg"
                  alt="Équipe rassemblée devant le siège national"
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
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-light)]">Positionnement</p>
                  <p className="mt-4 text-lg leading-8 text-white/82">
                    Une présence institutionnelle fondée sur la veille, la protection, la médiation et l'encadrement opérationnel.
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
          eyebrow="Présentation stratégique"
          title="Résumé stratégique de l'organisation"
          description="Le dossier décrit une organisation institutionnelle à vocation internationale, structurée autour de la sécurité, du renseignement, de la protection des droits humains, de la médiation et des interventions d'urgence, avec des preuves visuelles de réunions, de missions et d'inauguration de siège."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 90}>
              <article className="rounded-[30px] border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-card)]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">{item.kicker}</p>
                <h2 className="mt-4 text-2xl font-semibold text-[var(--foreground)]">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/images/operations/minat-follow-up.jpg"
                alt="Mission de suivi avec les cadres du MINAT"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Expérience institutionnelle"
              title="Une expérience pensée comme un site institutionnel premium"
              description="La navigation donne un accès rapide à la mission, à la structure hiérarchique, à la preuve visuelle des actions et aux points de contact. La page d'accueil joue le rôle de synthèse stratégique avant d'orienter vers les pages détaillées."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-[24px] border border-[var(--border)] bg-white px-5 py-4 text-sm font-medium text-[var(--foreground)] shadow-[var(--shadow-card)]">
                  {value}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Missions prioritaires"
          title="Domaines d'intervention mis en avant"
          description="Les contenus sont rédigés en français institutionnel, sans remplissage, en mettant l'accent sur les missions réellement visibles dans le dossier."
        />
        <div className="mt-10">
          <MissionGrid items={missions.slice(0, 6)} />
        </div>
      </section>

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Identité visuelle"
              title="Une direction visuelle alignée sur le blason"
              description="La palette repose sur l'or, l'ivoire, le bronze et le charbon. Le rendu vise une lecture premium et institutionnelle, avec des contrastes sobres et une lumière chaleureuse inspirée du logo."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["#b8872c", "#8e651f", "#f7f1e6", "#15120f", "#e4c981"].map((color) => (
                <div key={color} className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow-card)]">
                  {color}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="rounded-[36px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/about/minat-group-photo.jpg"
                alt="Photo de groupe devant le bureau national"
                width={1000}
                height={1000}
                className="h-full w-full rounded-[28px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Architecture éditoriale"
          title="Une architecture pensée pour la lisibilité et le référencement"
          description="Chaque page dispose d'une cible sémantique claire, d'un H1 unique, de métadonnées dédiées, d'un maillage interne cohérent et d'un contenu majoritairement rendu côté serveur."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-5">
          {timeline.map((step, index) => (
            <Reveal key={step.period} delay={index * 80}>
              <article className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)] lg:h-full">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">{step.period}</p>
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
