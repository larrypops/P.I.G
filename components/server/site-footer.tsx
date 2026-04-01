import Image from "next/image";
import Link from "next/link";

import { contactDetails, navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--foreground)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20 bg-white">
              <Image src="/logo/logo.png" alt="Logo P.I.G" fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-light)]">P.I.G</p>
              <p className="max-w-sm text-sm text-white/70">
                Organisation active et responsable, engagée pour la sécurité, les droits humains et la protection des personnes.
              </p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/70">
            La Police Internationale d'Intervention Générale met en avant une approche structurée de la prévention, du renseignement, de la médiation et des interventions d'urgence.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Navigation</p>
          <div className="flex flex-col gap-3 text-sm text-white/70">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">Contacts</p>
          <div className="space-y-3 text-sm leading-7 text-white/70">
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
