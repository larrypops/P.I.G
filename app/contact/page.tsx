import Image from "next/image";

import { ContactPanel } from "@/components/server/contact-panel";
import { SectionHeading } from "@/components/server/section-heading";
import { PageHero } from "@/components/server/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Coordonnées de contact de la P.I.G en France et au Cameroun pour les demandes institutionnelles et partenariales.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Entrer en relation avec une organisation qui met en avant la responsabilité, la coordination et la représentation institutionnelle."
        description="La page contact réunit les coordonnées essentielles, les usages possibles et les repères de prise de contact pour les visiteurs institutionnels et les partenaires."
        image="/images/hero/headquarters.jpg"
        imageAlt="Siège national de l'organisation"
        variant="utility"
      />

      <section className="container-shell section-gap">
        <ContactPanel />
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="panel-elevated rounded-[2rem] p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="/images/hero/headquarters-team.jpg"
                alt="Équipe au siège national"
                width={1400}
                height={1100}
                className="aspect-[4/4.4] w-full rounded-[1.4rem] object-cover"
              />
              <Image
                src="/images/gallery/baham-2.jpg"
                alt="Environnement institutionnel à Baham"
                width={1400}
                height={1100}
                className="aspect-[4/4.4] w-full rounded-[1.4rem] object-cover"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Prise de contact qualifiée"
              title="Préparer une demande claire pour faciliter l'orientation et le traitement."
              description="Le site met à disposition des repères simples pour aider les partenaires, visiteurs ou interlocuteurs institutionnels à choisir le bon canal."
              compact
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="panel-muted rounded-[1.45rem] px-5 py-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Pour une coopération</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Précisez l'objet, le contexte et les attentes pour permettre une orientation plus rapide.
                </p>
              </div>
              <div className="panel-muted rounded-[1.45rem] px-5 py-5">
                <p className="text-sm font-semibold text-[var(--foreground)]">Pour une demande d'information</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Mentionnez la page concernée ou le sujet visé afin de faciliter la réponse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
