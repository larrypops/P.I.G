import { contactDetails } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <div className="space-y-8">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel-elevated rounded-[1.9rem] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">
            Coordonnées
          </p>
          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/75 px-5 py-5 text-sm leading-7 text-[var(--muted)]">
              <p className="font-semibold text-[var(--foreground)]">Bureau France</p>
              <p className="mt-2">{contactDetails.franceAddress}</p>
              <p>{contactDetails.francePhone}</p>
            </div>
            <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/75 px-5 py-5 text-sm leading-7 text-[var(--muted)]">
              <p className="font-semibold text-[var(--foreground)]">Bureau Afrique - Cameroun</p>
              <p className="mt-2">{contactDetails.cameroonAddress}</p>
              <p>{contactDetails.cameroonPhones.join(" • ")}</p>
            </div>
            <div className="rounded-[1.35rem] border border-[var(--border)] bg-white/75 px-5 py-5 text-sm leading-7 text-[var(--muted)]">
              <p className="font-semibold text-[var(--foreground)]">Courriel principal</p>
              <p className="mt-2">{contactDetails.email}</p>
            </div>
          </div>
        </div>

        <div className="panel-dark p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand-light)]">
            Prendre contact
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold">
            Pour une demande institutionnelle, un partenariat ou une prise d'information
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
            Utilisez les coordonnées ci-contre pour entrer en relation avec la P.I.G. La page est
            pensée pour faciliter la préparation d'une demande claire et adaptée au bon canal.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-light)]">
                Canal recommandé
              </p>
              <p className="mt-2 text-sm leading-6 text-white/74">
                Courriel pour les demandes structurées et partenariales.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--brand-light)]">
                Délai usuel
              </p>
              <p className="mt-2 text-sm leading-6 text-white/74">
                Réponse sous 48 à 72 heures selon la nature de la demande.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${contactDetails.email}`}
              className="rounded-[24px] bg-white px-5 py-4 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface)]"
            >
              Envoyer un courriel
            </a>
            <a
              href={`tel:${contactDetails.francePhone.replaceAll(" ", "")}`}
              className="rounded-[24px] border border-white/25 px-5 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Appeler le bureau France
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="panel-muted rounded-[1.75rem] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Types de demandes
          </p>
          <ul className="list-clean mt-4 space-y-2 text-sm leading-7 text-[var(--muted)]">
            {contactDetails.contactScopes.map((scope) => (
              <li key={scope} className="rounded-[1rem] bg-white/70 px-3 py-2">
                {scope}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel-muted rounded-[1.75rem] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Horaires de référence
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{contactDetails.officeHours}</p>
        </div>
        <div className="panel-muted rounded-[1.75rem] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
            Délai indicatif
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{contactDetails.responseTime}</p>
        </div>
      </div>
    </div>
  );
}
