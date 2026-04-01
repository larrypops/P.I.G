"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/lib/site-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/85 px-4 text-sm font-semibold text-[var(--foreground)] backdrop-blur"
        aria-expanded={open}
        aria-label="Ouvrir le menu"
      >
        Menu
      </button>
      {open ? (
        <div className="absolute left-4 right-4 top-20 rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-soft)]">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active ? "bg-[var(--brand)] text-[var(--brand-contrast)]" : "text-[var(--muted)] hover:bg-black/5 hover:text-[var(--foreground)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
