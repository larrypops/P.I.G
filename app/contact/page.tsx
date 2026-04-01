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
        title="Entrer en relation avec une organisation qui met en avant la responsabilité, la coordination et la présence institutionnelle."
        description="La page contact concentre les coordonnées essentielles pour une prise de contact simple, lisible et immédiate."
        image="/images/leadership/yaker-ekall-simone-daniella.jpg"
        imageAlt="Chargée des relations publiques"
      />

      <section className="section-space content-grid">
        <ContactPanel />
      </section>
    </>
  );
}
