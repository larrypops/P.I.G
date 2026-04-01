import Image from "next/image";
import Link from "next/link";

import { contactDetails, navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-20 overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,#12161c_0%,#171d24_58%,#1b2026_100%)] text-white">
      <div className="container-shell py-16 sm:py-20">
        <div className="panel-dark overflow-hidden px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.7fr_0.9fr_0.8fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
                  <Image src="/logo/logo.png" alt="Logo P.I.G" fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[var(--brand-light)]">
                    P.I.G
                  </p>
                  <p className="max-w-sm text-sm text-white/64">
                    Police Internationale d'Intervention Générale
                  </p>
                </div>
              </div>
              <p className="max-w-xl text-sm leading-7 text-white/68">
                Présentation institutionnelle d'une organisation engagée sur les enjeux de
                protection, de coordination, de médiation et d'accompagnement des personnes.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-light)]">
                    Implantation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{contactDetails.cameroonAddress}</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-light)]">
                    Point de contact
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/72">{contactDetails.email}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
                Navigation
              </p>
              <div className="grid gap-3 text-sm text-white/62">
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-[var(--brand-light)]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
                Contacts
              </p>
              <div className="space-y-3 text-sm leading-7 text-white/62">
                <p>{contactDetails.franceAddress}</p>
                <p>{contactDetails.francePhone}</p>
                <p>{contactDetails.cameroonPhones.join(" • ")}</p>
                <p>{contactDetails.officeHours}</p>
              </div>
              <Link href="/contact" className="button-ghost">
                Accéder à la page contact
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/78">
                Repères
              </p>
              <div className="space-y-3">
                <div className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-light)]">
                    Vocation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Protection, coordination, médiation et suivi institutionnel.
                  </p>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-light)]">
                    Usage du site
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    Comprendre l'organisation, ses missions et les modalités de prise de contact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} P.I.G. Présentation institutionnelle.</p>
            <p>Site vitrine structuré pour une lecture claire sur desktop, tablette et mobile.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
