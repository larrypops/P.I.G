"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/client/reveal";
import { cn } from "@/lib/utils";

type GalleryItem = {
  title: string;
  category: string;
  image: string;
  summary: string;
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
    active === "Toutes" ? items : items.filter((item) => item.category === active);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full px-5 py-3 text-sm font-semibold transition",
              active === category
                ? "bg-[var(--foreground)] text-white shadow-[var(--shadow-soft)]"
                : "border border-[var(--border-strong)] bg-white/85 text-[var(--foreground)] hover:border-[var(--brand)] hover:bg-[var(--brand-fade)]",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <Reveal key={`${item.title}-${item.image}`} delay={index * 40}>
            <article className="panel-muted overflow-hidden rounded-[1.75rem]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-2 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)]">
                  {item.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--muted)]">{item.summary}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
