type Mission = {
  title: string;
  description: string;
};

export function MissionGrid({ items }: { items: Mission[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="rounded-[30px] border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
          <div className="h-11 w-11 rounded-2xl bg-[var(--brand-fade)]" />
          <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
