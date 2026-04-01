import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export function LeadershipGrid({ items }: { items: Leader[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((leader) => (
        <article key={leader.name} className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
          <div className="relative h-72 bg-[var(--surface-muted)]">
            <Image src={leader.image} alt={leader.name} fill className="object-cover" />
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">{leader.role}</p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{leader.name}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{leader.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
