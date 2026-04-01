"use client";

import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.question} className="rounded-[28px] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-card)]">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={open}
            >
              <span className="text-lg font-semibold text-[var(--foreground)]">{item.question}</span>
              <span className="text-2xl leading-none text-[var(--brand)]">{open ? "−" : "+"}</span>
            </button>
            <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden text-sm leading-7 text-[var(--muted)]">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
