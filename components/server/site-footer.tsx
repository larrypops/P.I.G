import Image from "next/image";
import Link from "next/link";

import { contactDetails, navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,#12161c_0%,#171d24_58%,#1b2026_100%)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
              <Image src="/logo/logo.png" alt="Logo P.I.G" fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[var(--brand-light)]">P.I.G</p>
              <p className="max-w-sm text-sm text-white/62">
                Organisation active et responsable, engagée pour la sécurité, les droits humains et la protection des personnes.
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/62">
            La Police Internationale d'Intervention Générale met en avant une approche structurée de la prévention, du renseignement, de la médiation et des interventions d'urgence.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/78">Navigation</p>
          <div className="flex flex-col gap-3 text-sm text-white/62">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[var(--brand-light)]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/78">Contacts</p>
          <div className="space-y-3 text-sm leading-7 text-white/62">
            <p>{contactDetails.franceAddress}</p>
            <p>{contactDetails.email}</p>
            <p>{contactDetails.francePhone}</p>
            <p>{contactDetails.cameroonPhones.join(" • ")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
