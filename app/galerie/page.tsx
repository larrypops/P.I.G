import { GalleryGrid } from "@/components/server/gallery-grid";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { galleryImages } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Galerie",
  description:
    "Galerie institutionnelle : inaugurations, réunions stratégiques, missions de suivi et scènes de terrain de la P.I.G.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Des images réorganisées par contexte réel : siège, stratégie, missions et représentation."
        description="Cette galerie met en avant les visuels les plus utiles du dossier, en privilégiant les images institutionnelles fortes et contextualisées."
        image="/images/gallery/inauguration-ceremony.jpg"
        imageAlt="Inauguration du siège national"
      />

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Réorganisation intelligente des images"
          title="Une hiérarchie visuelle pensée pour la crédibilité"
          description="Les images les plus lisibles ont été réservées aux pages à forte visibilité. Les portraits servent l'organisation, les scènes de groupe soutiennent la preuve institutionnelle et les visuels secondaires enrichissent la galerie."
        />
        <div className="mt-10">
          <GalleryGrid items={galleryImages} />
        </div>
      </section>
    </>
  );
}
