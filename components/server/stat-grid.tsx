type Stat = {
  value: string;
  label: string;
};

export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
          <p className="text-3xl font-semibold text-[var(--brand)]">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
