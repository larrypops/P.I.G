import Image from "next/image";

import { Reveal } from "@/components/client/reveal";
import { CtaBanner } from "@/components/server/cta-banner";
import { PageHero } from "@/components/server/page-hero";
import { SectionHeading } from "@/components/server/section-heading";
import { createPageMetadata } from "@/lib/metadata";
import { actionStories } from "@/lib/site-data";

const method = [
  "Observation et collecte d'informations",
  "Coordination avec les parties prenantes",
  "Déploiement ou suivi de terrain selon les besoins",
  "Documentation et formulation de recommandations",
];

export const metadata = createPageMetadata({
  title: "Actions et actualités | P.I.G",
  description:
    "Retrouvez les actions récentes de la P.I.G : réunions stratégiques, suivi institutionnel, protection des consommateurs et inauguration du siège national.",
  path: "/actions",
});

export default function ActionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Actions"
        title="Des actions récentes qui illustrent la coordination, la présence terrain et la progression institutionnelle."
        description="À partir des visuels et informations du dossier, cette page rassemble plusieurs temps forts représentatifs de l'activité et de l'ancrage de la P.I.G."
        image="/images/gallery/meeting-3.jpg"
        imageAlt="Réunion institutionnelle documentée"
        primaryCta={{ href: "/galerie", label: "Voir la galerie" }}
        secondaryCta={{ href: "/contact", label: "Prendre contact" }}
      />

      <section className="container-shell section-gap">
        <SectionHeading
          eyebrow="Temps forts"
          title="Une sélection d'actions et d'événements documentés dans le dossier."
          description="Le site valorise les contenus visuels les plus cohérents pour raconter l'organisation : réunions, visites institutionnelles, actions de contrôle et développement du siège."
        />
        <div className="mt-10 space-y-6">
          {actionStories.map((story, index) => (
            <Reveal key={story.title} delay={index * 70}>
              <article className="panel overflow-hidden">
                <div className="grid gap-0 lg:grid-cols-[0.48fr_0.52fr]">
                  <div className="relative min-h-[320px]">
                    <Image src={story.image} alt={story.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <p className="text-xs uppercase tracking-[0.22em] text-brand-bronze">
                      {story.tag}
                    </p>
                    <h2 className="mt-4 font-serif text-3xl font-semibold">{story.title}</h2>
                    <p className="mt-5 text-base">{story.excerpt}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell section-gap pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="panel p-8 lg:p-10">
              <SectionHeading
                eyebrow="Méthode d'intervention"
                title="Une approche fondée sur la coordination, la rigueur et la traçabilité."
                description="Même lorsqu'elles sont très différentes, les actions mises en avant dans le dossier révèlent une logique commune de préparation, d'intervention et de suivi."
              />
              <ul className="mt-8 grid gap-4">
                {method.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] border border-brand-bronze/10 bg-brand-ivory/70 px-5 py-4 text-sm text-brand-slate"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-brand-bronze/15 shadow-soft">
              <Image
                src="/images/actions/minat-visit-2.jpg"
                alt="Mission de suivi institutionnel"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Échanger avec la P.I.G à propos d'une action, d'une représentation ou d'un partenariat"
        description="Utilisez la page contact pour joindre le bureau France ou le bureau Afrique et préparer un échange adapté à votre besoin."
        primary={{ href: "/contact", label: "Nous contacter" }}
      />
    </>
  );
}
