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
        className="inline-flex h-11 items-center justify-center rounded-full border border-white/45 bg-white/70 px-4 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-crisp)] backdrop-blur-xl"
        aria-expanded={open}
        aria-label="Ouvrir le menu"
      >
        Menu
      </button>
      {open ? (
        <div className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(22rem,calc(100vw-2.25rem))] rounded-[1.75rem] border border-white/45 bg-[rgba(255,255,255,0.86)] p-4 shadow-[var(--shadow-soft)] backdrop-blur-2xl">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-[var(--foreground)] text-white"
                      : "text-[var(--muted)] hover:bg-white/70 hover:text-[var(--foreground)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="button-primary mt-2" onClick={() => setOpen(false)}>
              Nous contacter
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
