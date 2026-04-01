"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileNav } from "@/components/client/mobile-nav";
import { navigation } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 rounded-full border border-white/45 bg-[rgba(255,255,255,0.62)] px-4 py-3 shadow-[var(--shadow-crisp)] backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/50 bg-white/85 shadow-[var(--shadow-card)]">
            <Image src="/logo/logo.png" alt="Logo P.I.G" fill className="object-cover" sizes="48px" />
          </div>
          <div>
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-[var(--brand-strong)]">
              P.I.G
            </div>
            <div className="max-w-[12rem] text-xs text-[var(--muted)] sm:max-w-none">
              Police Internationale d'Intervention Generale
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1.5 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--foreground)] text-white shadow-[var(--shadow-card)]"
                    : "text-[var(--muted)] hover:bg-white/80 hover:text-[var(--foreground)]"
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
            className="button-primary hidden md:inline-flex"
          >
            Nous contacter
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
