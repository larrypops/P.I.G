import { GalleryFilter } from "@/components/client/gallery-filter";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { galleryHighlights, galleryImages } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Galerie",
  description:
    "Galerie institutionnelle : inaugurations, reunions strategiques, missions de suivi et scenes de terrain de la P.I.G.",
  path: "/galerie",
});

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title="Des images classees par contexte institutionnel et non comme simple accumulation visuelle."
        description="La galerie met en avant les visuels les plus utiles du dossier en les regroupant par evenement, type d'action et registre de representation."
        image="/images/gallery/inauguration-ceremony.jpg"
        imageAlt="Inauguration du siege national"
      />

      <section className="section-space content-grid">
        <SectionHeading
          eyebrow="Archives visuelles"
          title="Une galerie plus lisible pour documenter les activites"
          description="Les images sont organisees en categories pour mieux distinguer inauguration du siege, reunions strategiques, suivi institutionnel et representation."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {galleryHighlights.map((item) => (
            <div
              key={item}
              className="rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--muted)] shadow-[var(--shadow-card)]"
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
