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
          <div
            key={item.question}
            className={`rounded-[1.75rem] border p-6 transition ${open ? "border-[rgba(183,138,51,0.28)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,241,230,0.94))] shadow-[var(--shadow-soft)]" : "panel-muted"}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 text-left"
              aria-expanded={open}
            >
              <span className="text-lg font-semibold text-[var(--foreground)]">{item.question}</span>
              <span
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-lg leading-none transition ${
                  open
                    ? "border-[rgba(183,138,51,0.24)] bg-[var(--brand-fade)] text-[var(--brand-strong)] rotate-45"
                    : "border-[var(--border)] bg-white/75 text-[var(--brand)]"
                }`}
              >
                +
              </span>
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
