import { contactDetails } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[30px] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-card)]">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">Coordonnées</p>
        <div className="mt-6 space-y-6 text-sm leading-7 text-[var(--muted)]">
          <div>
            <p className="font-semibold text-[var(--foreground)]">Bureau France</p>
            <p>{contactDetails.franceAddress}</p>
            <p>{contactDetails.francePhone}</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--foreground)]">Bureau Afrique - Cameroun</p>
            <p>{contactDetails.cameroonPhones.join(" • ")}</p>
          </div>
          <div>
            <p className="font-semibold text-[var(--foreground)]">Courriel</p>
            <p>{contactDetails.email}</p>
          </div>
        </div>
      </div>

      <div className="rounded-[30px] border border-[var(--border)] bg-[var(--foreground)] p-8 text-white shadow-[var(--shadow-soft)]">
        <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand-light)]">Prendre contact</p>
        <h2 className="mt-4 font-display text-3xl font-semibold">Pour une demande institutionnelle, un partenariat ou une prise d'information</h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
          Utilisez les coordonnées ci-contre pour entrer en relation avec la P.I.G. Le site est conçu pour présenter l'organisation, ses missions, sa structure et ses références visuelles.
        </p>
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
  );
}
