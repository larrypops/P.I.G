import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { LeadershipGrid } from "@/components/server/leadership-grid";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { departments, leadership } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Organisation",
  description:
    "Direction générale, hiérarchie, départements et responsables mis en avant par la Police Internationale d'Intervention Générale.",
  path: "/organisation",
});

export default function OrganisationPage() {
  return (
    <>
      <PageHero
        eyebrow="Organisation"
        title="Une gouvernance hiérarchisée, des organes spécialisés et des relais régionaux."
        description="Le site traduit la structure décrite dans le dossier : direction générale, bureau exécutif, conseils spécialisés, départements et services de soutien."
        image="/images/operations/strategy-meeting-room.jpg"
        imageAlt="Réunion de coordination en salle"
      />

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Direction"
          title="Responsables et figures de représentation"
          description="Les portraits disponibles servent à valoriser l'incarnation de la gouvernance, les relais régionaux et la communication externe."
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
                alt="Trois premiers hauts commissaires généraux"
                width={424}
                height={506}
                className="mx-auto rounded-[24px] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Structure"
              title="Organes, départements et chaîne de responsabilité"
              description="Le contenu est organisé pour rendre lisible une hiérarchie institutionnelle dense, sans surcharger la navigation."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {departments.map((department) => (
                <div key={department} className="rounded-[24px] border border-[var(--border)] bg-white px-5 py-4 text-sm leading-7 text-[var(--foreground)] shadow-[var(--shadow-card)]">
                  {department}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space content-grid">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[34px] border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
              <Image
                src="/images/leadership/nebot-etienne.jpg"
                alt="Portrait de NEBOT Etienne"
                width={400}
                height={403}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              eyebrow="Mémoire institutionnelle"
              title="Valoriser l'historique sans diluer le message principal"
              description="Les images historiques sont utilisées pour appuyer la continuité de la gouvernance et enrichir la crédibilité du récit institutionnel."
            />
            <div className="mt-8 space-y-5 text-sm leading-8 text-[var(--muted)]">
              <p>
                La page organisation distingue les figures actuelles, les délégués régionaux et les références historiques.
              </p>
              <p>
                Cette séparation permet de garder une lecture contemporaine tout en montrant la continuité du commandement depuis la création de l'organisation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
