import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { LeadershipGrid } from "@/components/server/leadership-grid";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import {
  departmentDetails,
  departments,
  executiveLeaders,
  leadership,
} from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Organisation",
  description:
    "Direction générale, relais régionaux, départements et responsables mis en avant par la Police Internationale d'Intervention Générale.",
  path: "/organisation",
});

export default function OrganisationPage() {
  return (
    <>
      <PageHero
        eyebrow="Organisation"
        title="Une organisation présentée entre direction générale, relais régionaux et services de soutien."
        description="La page Organisation clarifie les niveaux de responsabilité mis en avant dans le dossier : gouvernance centrale, représentation territoriale et départements thématiques."
        image="/images/hero/strategy-meeting.jpg"
        imageAlt="Réunion de coordination institutionnelle"
      />

      <section className="container-shell section-gap">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Direction générale"
              title="Les responsabilités centrales"
              description="La direction générale porte l'orientation, la représentation et la cohérence des grandes priorités institutionnelles."
            />
            <div className="mt-8 grid gap-4">
              {executiveLeaders.map((leader) => (
                <article key={leader.name} className="panel-muted rounded-[1.7rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                    {leader.role}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                    {leader.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{leader.description}</p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="media-frame">
              <Image
                src="/images/operations/strategy-meeting-room.jpg"
                alt="Salle de réunion pour la coordination institutionnelle"
                width={1200}
                height={1000}
                className="aspect-[4/3.5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Relais de représentation"
          title="Profils documentés par des portraits cohérents"
          description="Les responsables affichés ici correspondent aux images de portrait disponibles et permettent une lecture crédible des fonctions de représentation et de coordination."
        />
        <div className="mt-10">
          <LeadershipGrid items={leadership} />
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <div className="panel-muted rounded-[2rem] p-4">
              <Image
                src="/images/leadership/former-commissioners.jpg"
                alt="Trois premiers hauts commissaires généraux"
                width={424}
                height={506}
                className="mx-auto rounded-[1.6rem] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Départements et services"
              title="Une chaîne de responsabilité lisible"
              description="La structure met en avant des départements thématiques et des services d'appui afin de couvrir les champs d'action institutionnels les plus visibles dans le dossier."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {departmentDetails.map((department) => (
                <article key={department.title} className="panel-muted rounded-[1.5rem] px-5 py-5">
                  <h3 className="text-base font-semibold text-[var(--foreground)]">
                    {department.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                    {department.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <SectionHeading
          eyebrow="Repères de structure"
          title="Les entités citées dans l'organisation"
          description="Cette liste conserve les appellations institutionnelles du dossier tout en les présentant dans un format plus sobre et plus facile à parcourir."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <div
              key={department}
              className="panel-muted rounded-[1.45rem] px-5 py-4 text-sm leading-7 text-[var(--foreground)]"
            >
              {department}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
