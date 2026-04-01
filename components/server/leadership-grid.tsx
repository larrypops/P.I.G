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
        <article
          key={leader.name}
          className="panel-muted overflow-hidden rounded-[1.9rem]"
        >
          <div className="relative h-72 bg-[var(--surface-muted)]">
            <Image src={leader.image} alt={leader.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(18,22,28,0.22)_100%)]" />
          </div>
          <div className="p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-strong)]">{leader.role}</p>
            <h3 className="mt-3 text-xl font-semibold text-[var(--foreground)]">{leader.name}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{leader.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
