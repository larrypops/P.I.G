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
  title: "Gouvernance et hierarchie",
  description:
    "Decouvrez la direction generale, les organes de gouvernance, les departements et la hierarchie de la Police Internationale d'Intervention Generale.",
  path: "/gouvernance",
});

export default function GouvernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Gouvernance"
        title="Une lecture structuree de la direction, des organes de pilotage et de la chaine de responsabilite."
        description="La gouvernance de la P.I.G est presentee comme un ensemble articule entre direction generale, organes de pilotage, conseils specialises, departements et hierarchie des grades."
        image="/images/hero/strategy-meeting.jpg"
        imageAlt="Reunion strategique de gouvernance"
        primaryCta={{ href: "/organisation", label: "Voir l'organisation" }}
        secondaryCta={{ href: "/contact", label: "Prendre contact" }}
      />

      <section className="container-shell section-gap">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Direction"
              title="Le niveau central de commandement"
              description="Cette premiere lecture distingue la direction generale des relais de representation pour clarifier le centre de decision et les niveaux de deploiement."
            />
            <div className="mt-8 grid gap-4">
              {executiveLeaders.map((leader) => (
                <article key={leader.name} className="panel p-6">
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
            <div className="panel overflow-hidden">
              <div className="relative min-h-[420px]">
                <Image
                  src="/images/governance/former-commissioners.jpg"
                  alt="Memoire institutionnelle de la gouvernance"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                  Memoire institutionnelle
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  Les references historiques appuient la continuite de la gouvernance, tandis que
                  les organes actuels structurent la lecture operative du site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Relais territoriaux"
          title="Des profils qui incarnent la representation et le deploiement"
          description="Les portraits disponibles sont regroupes ici pour mieux distinguer les fonctions regionales et la relation avec les partenaires externes."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamProfiles.map((profile, index) => (
            <Reveal key={profile.name} delay={index * 60}>
              <article className="panel overflow-hidden">
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
            <div className="panel h-full p-8">
              <SectionHeading
                eyebrow="Organes"
                title="Les instances de pilotage"
                description="Les organes listes dans le dossier sont ici reformules comme des niveaux de pilotage et de regulation."
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
            <div className="panel h-full p-8">
              <SectionHeading
                eyebrow="Conseils specialises"
                title="Les expertises transversales"
                description="Ces conseils donnent une structure plus lisible aux domaines sensibles relies aux missions et a la gouvernance."
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
            <div className="panel h-full p-8">
              <SectionHeading
                eyebrow="Departements"
                title="Les poles metiers"
                description="Les departements thementiques permettent de relier les organes de pilotage aux activites visibles sur le site."
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
          eyebrow="Hierarchie"
          title="Une organisation des grades qui soutient la chaine de responsabilite"
          description="Le dossier decrit plusieurs groupes de grades. Ils sont presentes ici pour donner une lecture plus ordonnee de la structuration interne."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {rankGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <article className="panel h-full rounded-[1.75rem] p-6">
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
          title="Les Hauts Commissaires Generaux depuis la creation de la P.I.G"
          description="Cette chronologie restitue la continuite de la direction generale et son evolution dans le temps."
        />
        <div className="mt-10 space-y-6">
          {commissionersTimeline.map((item, index) => (
            <Reveal key={item.years} delay={index * 70}>
              <article className="panel rounded-[1.75rem] p-6 lg:grid lg:grid-cols-[220px_1fr] lg:items-start lg:gap-8">
                <p className="font-display text-2xl font-semibold text-[var(--brand)]">
                  {item.years}
                </p>
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
        description="Consultez les coordonnees de la P.I.G pour toute demande d'information, de representation ou de cooperation institutionnelle."
        primary={{ href: "/contact", label: "Aller a la page contact" }}
      />
    </>
  );
}
