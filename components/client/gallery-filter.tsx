"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { cn } from "@/lib/utils";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
};

type GalleryFilterProps = {
  items: GalleryItem[];
};

export function GalleryFilter({ items }: GalleryFilterProps) {
  const categories = useMemo(
    () => ["Toutes", ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  );
  const [active, setActive] = useState("Toutes");

  const filteredItems =
    active === "Toutes"
      ? items
      : items.filter((item) => item.category === active);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full px-5 py-3 text-sm font-semibold",
              active === category
                ? "bg-brand-ink text-white shadow-soft"
                : "border border-brand-bronze/15 bg-white/70 text-brand-ink hover:border-brand-bronze/40 hover:bg-brand-gold/10",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <Reveal key={`${item.title}-${item.image}`} delay={index * 40}>
            <article className="panel group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="space-y-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-bronze">
                  {item.category}
                </p>
                <h3 className="font-serif text-xl font-semibold text-brand-ink">
                  {item.title}
                </h3>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
