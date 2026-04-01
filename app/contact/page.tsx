import { ContactPanel } from "@/components/server/contact-panel";
import { PageHero } from "@/components/server/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Coordonnees de contact de la P.I.G en France et au Cameroun pour les demandes institutionnelles et partenariales.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Entrer en relation avec une organisation qui met en avant la responsabilite, la coordination et la representation institutionnelle."
        description="La page contact reunit les coordonnees essentielles, les usages possibles et les reperes de prise de contact pour les visiteurs institutionnels et les partenaires."
        image="/images/hero/headquarters.jpg"
        imageAlt="Siege national de l'organisation"
      />

      <section className="section-space content-grid">
        <ContactPanel />
      </section>
    </>
  );
}
