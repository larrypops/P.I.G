import { GalleryFilter } from "@/components/client/gallery-filter";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { galleryHighlights, galleryImages } from "@/lib/site-data";

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
        title="Des images classées par contexte institutionnel et non comme simple accumulation visuelle."
        description="La galerie met en avant les visuels les plus utiles du dossier en les regroupant par événement, type d'action et registre de représentation."
        image="/images/gallery/inauguration-ceremony.jpg"
        imageAlt="Inauguration du siège national"
      />

      <section className="container-shell section-gap">
        <SectionHeading
          eyebrow="Archives visuelles"
          title="Une galerie plus lisible pour documenter les activités"
          description="Les images sont organisées en catégories pour mieux distinguer inauguration du siège, réunions stratégiques, suivi institutionnel et représentation."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {galleryHighlights.map((item) => (
            <div
              key={item}
              className="panel-muted rounded-full px-4 py-2 text-sm text-[var(--muted)]"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="mt-10">
          <GalleryFilter items={galleryImages} />
        </div>
      </section>
    </>
  );
}
