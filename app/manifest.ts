import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Police Internationale d'Intervention Générale",
    short_name: "P.I.G",
    description:
      "Site institutionnel de la Police Internationale d'Intervention Générale.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#141414",
    icons: [
      {
        src: "/logo/logo.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
