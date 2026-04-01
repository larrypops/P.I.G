import Image from "next/image";

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
        variant="narrative"
      />

      <section className="container-shell section-gap">
        <SectionHeading
          eyebrow="Archives visuelles"
          title="Une galerie plus lisible pour documenter les activités"
          description="Les images sont organisées en catégories pour mieux distinguer inauguration du siège, réunions stratégiques, suivi institutionnel et représentation."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="panel-elevated grid gap-4 rounded-[2rem] p-4 sm:grid-cols-2">
            <div className="media-frame rounded-[1.55rem]">
              <Image
                src="/images/gallery/baham-1.jpg"
                alt="Séquence d'inauguration à Baham"
                width={1200}
                height={900}
                className="aspect-[4/4.6] w-full object-cover"
              />
            </div>
            <div className="grid gap-4">
              <div className="media-frame rounded-[1.55rem]">
                <Image
                  src="/images/gallery/strategy-meeting-1.jpg"
                  alt="Réunion stratégique"
                  width={1200}
                  height={900}
                  className="aspect-[4/2.65] w-full object-cover"
                />
              </div>
              <div className="media-frame rounded-[1.55rem]">
                <Image
                  src="/images/gallery/meeting-3.jpg"
                  alt="Présence institutionnelle sur le terrain"
                  width={1200}
                  height={900}
                  className="aspect-[4/2.65] w-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="panel-dark flex flex-col justify-between gap-5 p-6 text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-light)]">
                Ouverture éditoriale
              </p>
              <h2 className="mt-4 font-display text-[1.85rem] font-semibold leading-[1.05]">
                Une galerie conçue comme une archive institutionnelle, pas comme un simple mur d'images.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                Les visuels sont regroupés pour donner une lecture plus claire des inaugurations,
                des réunions, des séquences de terrain et des moments de représentation.
              </p>
            </div>
            <div className="grid gap-3">
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/72">
                Plus de profondeur visuelle grâce à des images réinjectées depuis les archives disponibles.
              </div>
              <div className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-6 text-white/72">
                Filtrage conservé pour rester utile tout en améliorant la mise en scène générale.
              </div>
            </div>
          </div>
        </div>
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
