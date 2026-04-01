import { FaqAccordion } from "@/components/client/faq-accordion";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { faqItems } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Réponses aux questions fréquentes sur la Police Internationale d'Intervention Générale, sa vocation et ses contacts.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Les questions les plus fréquentes sur la vocation, les missions et les contacts."
        description="La FAQ complète le site avec un format direct, utile au référencement et clair pour les visiteurs institutionnels."
        image="/images/operations/strategy-meeting-portrait-1.jpg"
        imageAlt="Réunion stratégique en format portrait"
      />

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Un format simple pour expliquer l'essentiel"
          description="Les réponses reprennent les informations déjà présentes dans le dossier et les rendent immédiatement compréhensibles."
        />
        <div className="mt-10">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
