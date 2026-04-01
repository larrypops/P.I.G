import Image from "next/image";

import { FaqAccordion } from "@/components/client/faq-accordion";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { faqCategories, faqItems } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Réponses aux questions fréquentes sur la Police Internationale d'Intervention Générale, sa vocation, ses missions et ses contacts.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Les questions fréquentes sur la vocation, les missions, la gouvernance et les contacts."
        description="La FAQ complète le site avec un format direct et utile pour les visiteurs qui veulent comprendre rapidement le positionnement et les modalités de prise de contact."
        image="/images/operations/strategy-meeting-portrait-1.jpg"
        imageAlt="Réunion stratégique en format portrait"
        variant="utility"
      />

      <section className="container-shell section-gap">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Parcours de lecture"
              title="Des repères pour trouver la bonne information"
              description="La FAQ est organisée autour de deux besoins principaux : comprendre l'organisation et préparer une prise de contact utile."
            />
            <div className="panel-elevated mt-8 overflow-hidden rounded-[1.9rem] p-4">
              <Image
                src="/images/operations/strategy-meeting-portrait-2.jpg"
                alt="Portrait de réunion institutionnelle"
                width={1200}
                height={1500}
                className="aspect-[4/4.3] w-full rounded-[1.5rem] object-cover"
              />
              <div className="mt-4 rounded-[1.25rem] border border-[var(--border)] bg-white/75 px-4 py-4">
                <p className="text-sm font-semibold text-[var(--foreground)]">Avant de nous écrire</p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  Cette page aide à orienter les visiteurs vers les bonnes sections avant une prise de contact institutionnelle.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              {faqCategories.map((category) => (
                <article key={category.title} className="panel-muted rounded-[1.5rem] p-5">
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">{category.title}</h2>
                  <ul className="list-clean mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
                    {category.items.map((item) => (
                      <li key={item} className="rounded-[1rem] bg-white/70 px-3 py-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Questions fréquentes"
              title="Un format simple pour expliquer l'essentiel"
              description="Les réponses reprennent les informations présentes sur le site et les rendent immédiatement exploitables."
            />
            <div className="mt-10">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
