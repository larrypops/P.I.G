"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { navigation } from "@/lib/site-data";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 items-center justify-center rounded-full border border-white/45 bg-white/70 px-4 text-sm font-semibold text-[var(--foreground)] shadow-[var(--shadow-crisp)] backdrop-blur-xl transition hover:bg-white/85"
        aria-expanded={open}
        aria-label="Ouvrir le menu"
      >
        Menu
      </button>
      {open ? (
        <>
          <div className="fixed inset-0 z-40 bg-[rgba(18,22,28,0.22)] backdrop-blur-[2px]" />
          <div className="fixed inset-x-0 top-0 z-50 px-4 pt-20 sm:px-6">
            <div
              ref={menuRef}
              className="container-shell px-0"
            >
              <div className="ml-auto w-full max-w-sm translate-y-0 rounded-[2rem] border border-white/50 bg-[rgba(255,255,255,0.94)] p-4 shadow-[0_28px_70px_rgba(17,20,27,0.16)] backdrop-blur-2xl transition">
                <div className="mb-3 flex items-center justify-between px-2 py-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-strong)]">
                    Navigation
                  </p>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted-strong)] transition hover:border-[var(--brand)] hover:text-[var(--foreground)]"
                  >
                    Fermer
                  </button>
                </div>
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
                            : "text-[var(--muted)] hover:bg-[var(--brand-fade)] hover:text-[var(--foreground)]"
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
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
