import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { CtaBanner } from "@/components/server/cta-banner";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import {
  commissionersTimeline,
  departments,
  governanceBodies,
  rankGroups,
  specializedBodies,
  teamProfiles,
} from "@/lib/site-data";

export const metadata = createPageMetadata({
  title: "Gouvernance et hiérarchie | P.I.G",
  description:
    "Découvrez la direction générale, les organes de gouvernance, les départements et la hiérarchie de la Police Internationale d'Intervention Générale.",
  path: "/gouvernance",
});

export default function GouvernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Gouvernance"
        title="Une organisation hiérarchisée pour piloter les missions, coordonner les départements et représenter l'institution."
        description="La gouvernance de la P.I.G s'appuie sur une direction générale, des organes dédiés, des départements opérationnels et une hiérarchie de grades structurante."
        image="/images/governance/former-commissioners.jpg"
        imageAlt="Portraits d'anciens hauts commissaires généraux"
        primaryCta={{ href: "/organisation", label: "Voir l'organisation" }}
        secondaryCta={{ href: "/contact", label: "Prendre contact" }}
      />

      <section className="container-shell section-gap">
        <SectionHeading
          eyebrow="Portraits institutionnels"
          title="Des profils qui incarnent la représentation et le déploiement territorial."
          description="Le dossier met en lumière plusieurs responsables et relais institutionnels utiles pour illustrer la gouvernance de la P.I.G."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamProfiles.map((profile, index) => (
            <Reveal key={profile.name} delay={index * 60}>
              <article className="panel overflow-hidden">
                <div className="relative aspect-[4/4.5]">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-2xl font-semibold">{profile.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-brand-bronze">
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
                description="Les organes listés dans le dossier assurent l'orientation générale, l'administration et la régulation interne."
              />
              <ul className="mt-8 space-y-3">
                {governanceBodies.map((body) => (
                  <li
                    key={body}
                    className="rounded-[1.25rem] border border-brand-bronze/10 bg-white/80 px-4 py-3 text-sm text-brand-slate"
                  >
                    {body}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80} className="xl:col-span-1">
            <div className="panel h-full p-8">
              <SectionHeading
                eyebrow="Conseils spécialisés"
                title="Les expertises transversales"
                description="Ces conseils structurent les domaines sensibles liés à l'investigation, aux droits humains, à la corruption et à la protection des consommateurs."
              />
              <ul className="mt-8 space-y-3">
                {specializedBodies.map((body) => (
                  <li
                    key={body}
                    className="rounded-[1.25rem] border border-brand-bronze/10 bg-white/80 px-4 py-3 text-sm text-brand-slate"
                  >
                    {body}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160} className="xl:col-span-1">
            <div className="panel h-full p-8">
              <SectionHeading
                eyebrow="Départements"
                title="Les pôles métiers"
                description="Le fonctionnement de la P.I.G repose sur des départements thématiques et des services d'appui à l'action."
              />
              <ul className="mt-8 space-y-3">
                {departments.map((department) => (
                  <li
                    key={department}
                    className="rounded-[1.25rem] border border-brand-bronze/10 bg-white/80 px-4 py-3 text-sm text-brand-slate"
                  >
                    {department}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Hiérarchie"
          title="Une organisation des grades qui reflète la structuration interne de l'institution."
          description="Le dossier décrit plusieurs groupes de grades, depuis les officiers supérieurs jusqu'aux hommes de rang et aux stagiaires."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {rankGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 60}>
              <article className="panel h-full rounded-[1.75rem] p-6">
                <h3 className="font-serif text-2xl font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-brand-slate">
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
          title="Les Hauts Commissaires Généraux depuis la création de la P.I.G."
          description="Cette chronologie aide à restituer la continuité institutionnelle et l'évolution de la direction générale."
        />
        <div className="mt-10 space-y-6">
          {commissionersTimeline.map((item, index) => (
            <Reveal key={item.years} delay={index * 70}>
              <article className="panel rounded-[1.75rem] p-6 lg:grid lg:grid-cols-[220px_1fr] lg:items-start lg:gap-8">
                <p className="font-serif text-2xl font-semibold text-brand-bronze">
                  {item.years}
                </p>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-brand-ink">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm">{item.description}</p>
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
