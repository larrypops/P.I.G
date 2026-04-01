"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/client/mobile-nav";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-[color:rgba(249,245,236,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
            <Image src="/logo/logo.png" alt="Logo P.I.G" fill className="object-cover" sizes="48px" />
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[var(--brand)]">
              P.I.G
            </div>
            <div className="max-w-[12rem] text-xs text-[var(--muted)] sm:max-w-none">
              Police Internationale d'Intervention Generale
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-white text-[var(--foreground)] shadow-[var(--shadow-card)]"
                    : "text-[var(--muted)] hover:bg-white hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-[var(--brand-contrast)] shadow-[var(--shadow-soft)] transition hover:bg-[var(--brand-dark)] md:inline-flex"
          >
            Nous contacter
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
