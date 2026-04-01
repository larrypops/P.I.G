import { ContactPanel } from "@/components/server/contact-panel";
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
      />

      <section className="container-shell section-gap">
        <ContactPanel />
      </section>
    </>
  );
}
