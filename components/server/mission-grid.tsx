type Mission = {
  title: string;
  description: string;
};

export function MissionGrid({ items }: { items: Mission[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="panel-muted group rounded-[1.9rem] p-7 transition hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(183,138,51,0.18),rgba(183,138,51,0.06))]">
            <div className="h-4 w-4 rounded-full bg-[var(--brand)] transition group-hover:scale-110" />
          </div>
          <h3 className="mt-5 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
