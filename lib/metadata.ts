import type { Metadata } from "next";

import { siteUrl } from "@/lib/site-data";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: MetadataInput): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "P.I.G",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: new URL("/logo/og-image.png", siteUrl).toString(),
          width: 1200,
          height: 630,
          alt: "Logo de la Police Internationale d'Intervention Générale",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/logo/og-image.png", siteUrl).toString()],
    },
  };
}

export const createPageMetadata = createMetadata;
