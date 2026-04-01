import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";

import { SiteFooter } from "@/components/server/site-footer";
import { SiteHeader } from "@/components/server/site-header";
import { siteUrl } from "@/lib/site-data";

import "@/app/globals.css";

const fontDisplay = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const fontSans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "P.I.G | Police Internationale d'Intervention Générale",
    template: "%s | P.I.G",
  },
  description:
    "Site officiel de présentation de la Police Internationale d'Intervention Générale : missions, organisation, actions, contacts et engagements institutionnels.",
  keywords: [
    "P.I.G",
    "Police Internationale d'Intervention Générale",
    "droits humains",
    "protection des consommateurs",
    "renseignement",
    "médiation",
    "intervention d'urgence",
  ],
  openGraph: {
    title: "P.I.G | Police Internationale d'Intervention Générale",
    description:
      "Découvrez la mission, l'organisation et les actions de la Police Internationale d'Intervention Générale.",
    url: siteUrl,
    siteName: "P.I.G",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo P.I.G",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "P.I.G | Police Internationale d'Intervention Générale",
    description:
      "Présentation institutionnelle de la Police Internationale d'Intervention Générale.",
    images: ["/logo/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${fontDisplay.variable} ${fontSans.variable} bg-[var(--background)] font-sans text-[var(--foreground)] antialiased`}>
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
