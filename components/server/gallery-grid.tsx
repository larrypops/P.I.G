import Image from "next/image";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  return (
    <div className="columns-1 gap-5 md:columns-2 xl:columns-3">
      {items.map((image) => (
        <figure
          key={image.src}
          className="mb-5 break-inside-avoid overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-3 shadow-[var(--shadow-card)]"
        >
          <div className="relative overflow-hidden rounded-[22px]">
            <Image src={image.src} alt={image.alt} width={1200} height={900} className="h-auto w-full object-cover" />
          </div>
          <figcaption className="px-2 pb-1 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">{image.category}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{image.alt}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
