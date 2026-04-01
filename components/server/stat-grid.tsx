type Stat = {
  value: string;
  label: string;
};

export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-[30px] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.78))] p-6 shadow-[var(--shadow-card)] backdrop-blur-xl"
        >
          <p className="text-4xl font-display font-semibold text-[var(--foreground)]">{item.value}</p>
          <div className="mt-4 h-px w-12 bg-[linear-gradient(90deg,var(--brand),transparent)]" />
          <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
