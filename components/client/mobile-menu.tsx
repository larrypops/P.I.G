"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Ouvrir le menu"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-bronze/20 bg-white/80 text-brand-ink shadow-sm"
      >
        <span
          className={cn(
            "relative block h-4 w-5",
            "[&::after]:absolute [&::after]:left-0 [&::after]:top-0 [&::after]:h-0.5 [&::after]:w-5 [&::after]:bg-current [&::after]:content-['']",
            "[&::before]:absolute [&::before]:bottom-0 [&::before]:left-0 [&::before]:h-0.5 [&::before]:w-5 [&::before]:bg-current [&::before]:content-['']",
          )}
        >
          <span
            className={cn(
              "absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity",
              open && "opacity-0",
            )}
          />
        </span>
      </button>

      {open ? (
        <div className="panel absolute inset-x-4 top-[5.5rem] z-50 p-5">
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-gold/10"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="button-primary mt-2" onClick={() => setOpen(false)}>
              Prendre contact
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
