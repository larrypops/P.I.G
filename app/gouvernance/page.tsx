import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { CtaBanner } from "@/components/server/cta-banner";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import {
  commissionersTimeline,
  departmentDetails,
  executiveLeaders,
  governanceBodyDetails,
  rankGroups,
  specializedBodyDetails,
  teamProfiles,
} from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Gouvernance et hiérarchie",
  description:
    "Découvrez la direction générale, les organes de gouvernance, les départements et la hiérarchie de la Police Internationale d'Intervention Générale.",
  path: "/gouvernance",
});

export default function GouvernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Gouvernance"
        title="Une lecture structurée de la direction, des organes de pilotage et de la chaîne de responsabilité."
        description="La gouvernance de la P.I.G est présentée comme un ensemble articulé entre direction générale, organes de pilotage, conseils spécialisés, départements et hiérarchie des grades."
        image="/images/hero/strategy-meeting.jpg"
        imageAlt="Réunion stratégique de gouvernance"
        primaryCta={{ href: "/organisation", label: "Voir l'organisation" }}
        secondaryCta={{ href: "/contact", label: "Prendre contact" }}
        variant="institutional"
      />

      <section className="container-shell section-gap">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Direction"
              title="Le niveau central de commandement"
              description="Cette première lecture distingue la direction générale des relais de représentation pour clarifier le centre de décision et les niveaux de déploiement."
            />
            <div className="mt-8 grid gap-4">
              {executiveLeaders.map((leader) => (
                <article key={leader.name} className="panel-muted rounded-[1.7rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                    {leader.role}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--foreground)]">
                    {leader.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {leader.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="panel-muted overflow-hidden rounded-[2rem]">
              <div className="relative min-h-[420px]">
                <Image
                  src="/images/governance/former-commissioners.jpg"
                  alt="Mémoire institutionnelle de la gouvernance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  Mémoire institutionnelle
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Les références historiques appuient la continuité de la gouvernance, tandis que
                  les organes actuels structurent la lecture opérationnelle du site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="panel-elevated grid gap-8 rounded-[2.15rem] px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal variant="soft">
            <SectionHeading
              eyebrow="Architecture institutionnelle"
              title="Une page pensée pour clarifier les niveaux de décision, d'appui et de continuité."
              description="La gouvernance est présentée ici dans un ordre plus hiérarchisé afin de distinguer la direction, les organes de pilotage, les expertises spécialisées et la mémoire de commandement."
              compact
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/78 px-4 py-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Direction</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Porte la représentation générale et l'impulsion stratégique.</p>
              </div>
              <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/78 px-4 py-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Organes</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Structurent la décision, la régulation et le suivi des responsabilités.</p>
              </div>
              <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/78 px-4 py-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Mémoire</p>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Inscrit la continuité de commandement dans une lecture institutionnelle plus longue.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="panel-muted overflow-hidden rounded-[1.55rem] p-2">
                <Image
                  src="/images/governance/nebout-etienne.jpg"
                  alt="Portrait de NEBOT Etienne"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full rounded-[1.15rem] object-cover"
                />
              </div>
              <div className="panel-dark rounded-[1.55rem] p-5 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-light)]">Mémoire de commandement</p>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  L'histoire des Hauts Commissaires Généraux éclaire la continuité institutionnelle et donne de la profondeur à la lecture du site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Relais territoriaux"
          title="Des profils qui incarnent la représentation et le déploiement"
          description="Les portraits disponibles sont regroupés ici pour mieux distinguer les fonctions régionales et la relation avec les partenaires externes."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamProfiles.map((profile, index) => (
            <Reveal key={profile.name} delay={index * 60}>
              <article className="panel-muted overflow-hidden rounded-[1.8rem]">
                <div className="relative aspect-[4/4.5]">
                  <Image src={profile.image} alt={profile.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl font-semibold text-[var(--foreground)]">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[var(--brand)]">
                    {profile.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-8 xl:grid-cols-3">
          <Reveal className="xl:col-span-1">
            <div className="panel-muted h-full rounded-[2rem] p-8">
              <SectionHeading
                eyebrow="Organes"
                title="Les instances de pilotage"
                description="Les organes listés dans le dossier sont ici reformulés comme des niveaux de pilotage et de régulation."
              />
              <div className="mt-8 space-y-3">
                {governanceBodyDetails.map((body) => (
                  <article
                    key={body.title}
                    className="rounded-[1.25rem] border border-[var(--border)] bg-white/80 px-4 py-4"
                  >
                    <h3 className="text-base font-semibold text-[var(--foreground)]">{body.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="xl:col-span-1">
            <div className="panel-muted h-full rounded-[2rem] p-8">
              <SectionHeading
                eyebrow="Conseils spécialisés"
                title="Les expertises transversales"
                description="Ces conseils donnent une structure plus lisible aux domaines sensibles reliés aux missions et à la gouvernance."
              />
              <div className="mt-8 space-y-3">
                {specializedBodyDetails.map((body) => (
                  <article
                    key={body.title}
                    className="rounded-[1.25rem] border border-[var(--border)] bg-white/80 px-4 py-4"
                  >
                    <h3 className="text-base font-semibold text-[var(--foreground)]">{body.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={160} className="xl:col-span-1">
            <div className="panel-muted h-full rounded-[2rem] p-8">
              <SectionHeading
                eyebrow="Départements"
                title="Les pôles métiers"
                description="Les départements thématiques permettent de relier les organes de pilotage aux activités visibles sur le site."
              />
              <div className="mt-8 space-y-3">
                {departmentDetails.map((department) => (
                  <article
                    key={department.title}
                    className="rounded-[1.25rem] border border-[var(--border)] bg-white/80 px-4 py-4"
                  >
                    <h3 className="text-base font-semibold text-[var(--foreground)]">
                      {department.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {department.description}
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
          eyebrow="Hiérarchie"
          title="Une organisation des grades qui soutient la chaîne de responsabilité"
          description="Le dossier décrit plusieurs groupes de grades. Ils sont présentés ici pour donner une lecture plus ordonnée de la structuration interne."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {rankGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <article className="panel-muted h-full rounded-[1.75rem] p-6">
                <h3 className="font-display text-2xl font-semibold text-[var(--foreground)]">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--muted)]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Frise historique"
          title="Les Hauts Commissaires Généraux depuis la création de la P.I.G"
          description="Cette chronologie restitue la continuité de la direction générale et son évolution dans le temps."
        />
        <div className="mt-10 space-y-6">
          {commissionersTimeline.map((item, index) => (
            <Reveal key={item.years} delay={index * 70}>
              <article className="panel-muted rounded-[1.75rem] p-6 lg:grid lg:grid-cols-[220px_1fr] lg:items-start lg:gap-8">
                <p className="font-display text-2xl font-semibold text-[var(--brand)]">{item.years}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-[var(--foreground)]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Besoin d'une mise en relation avec l'organisation ?"
        description="Consultez les coordonnées de la P.I.G pour toute demande d'information, de représentation ou de coopération institutionnelle."
        primary={{ href: "/contact", label: "Aller à la page contact" }}
      />
    </>
  );
}
