import { FaqAccordion } from "@/components/client/faq-accordion";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createMetadata } from "@/lib/metadata";
import { faqCategories, faqItems } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Reponses aux questions frequentes sur la Police Internationale d'Intervention Generale, sa vocation, ses missions et ses contacts.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Les questions frequentes sur la vocation, les missions, la gouvernance et les contacts."
        description="La FAQ complete le site avec un format direct et utile pour les visiteurs qui veulent comprendre rapidement le positionnement et les modalites de prise de contact."
        image="/images/operations/strategy-meeting-portrait-1.jpg"
        imageAlt="Reunion strategique en format portrait"
      />

      <section className="section-space content-grid">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Parcours de lecture"
              title="Des reperes pour trouver la bonne information"
              description="La FAQ est organisee autour de deux besoins principaux : comprendre l'organisation et preparer une prise de contact utile."
            />
            <div className="mt-8 grid gap-4">
              {faqCategories.map((category) => (
                <article
                  key={category.title}
                  className="rounded-[24px] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-card)]"
                >
                  <h2 className="text-lg font-semibold text-[var(--foreground)]">{category.title}</h2>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Questions frequentes"
              title="Un format simple pour expliquer l'essentiel"
              description="Les reponses reprennent les informations presentes sur le site et les rendent immediatement exploitables."
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
