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
    "Direction generale, relais regionaux, departements et responsables mis en avant par la Police Internationale d'Intervention Generale.",
  path: "/organisation",
});

export default function OrganisationPage() {
  return (
    <>
      <PageHero
        eyebrow="Organisation"
        title="Une organisation presentee entre direction generale, relais regionaux et services de soutien."
        description="La page Organisation clarifie les niveaux de responsabilite mis en avant dans le dossier : gouvernance centrale, representation territoriale et departements thematiques."
        image="/images/hero/strategy-meeting.jpg"
        imageAlt="Reunion de coordination institutionnelle"
      />

      <section className="section-space content-grid">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Direction generale"
              title="Les responsabilites centrales"
              description="La direction generale porte l'orientation, la representation et la coherence des grandes priorites institutionnelles."
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
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                    {leader.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    {leader.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[36px] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/images/operations/strategy-meeting-room.jpg"
                alt="Salle de reunion pour la coordination institutionnelle"
                width={1200}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Relais de representation"
          title="Profils documentes par des portraits coherents"
          description="Les responsables affiches ici correspondent aux images de portrait disponibles et permettent une lecture plus credible des fonctions de representation et de coordination."
        />
        <div className="mt-10">
          <LeadershipGrid items={leadership} />
        </div>
      </section>

      <section className="section-space content-grid">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <div className="rounded-[36px] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-soft)]">
              <Image
                src="/images/leadership/former-commissioners.jpg"
                alt="Trois premiers hauts commissaires generaux"
                width={424}
                height={506}
                className="mx-auto rounded-[24px] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Departements et services"
              title="Une chaine de responsabilite lisible"
              description="La structure met en avant des departements thematiques et des services d'appui afin de couvrir les champs d'action institutionnels les plus visibles dans le dossier."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {departmentDetails.map((department) => (
                <article
                  key={department.title}
                  className="rounded-[24px] border border-[var(--border)] bg-white px-5 py-5 shadow-[var(--shadow-card)]"
                >
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

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Reperes de structure"
          title="Les entites citees dans l'organisation"
          description="Cette liste conserve les appellations institutionnelles du dossier tout en les presentant dans un format plus sobre et plus facile a parcourir."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <div
              key={department}
              className="rounded-[24px] border border-[var(--border)] bg-white px-5 py-4 text-sm leading-7 text-[var(--foreground)] shadow-[var(--shadow-card)]"
            >
              {department}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
