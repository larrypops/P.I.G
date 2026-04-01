import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
      },
      colors: {
        brand: {
          gold: "#D4AF37",
          bronze: "#B8871B",
          deep: "#6E4B14",
          ivory: "#F7F3EA",
          ink: "#141414",
          slate: "#6B7280",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(20, 20, 20, 0.12)",
        glow: "0 20px 50px rgba(212, 175, 55, 0.18)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top right, rgba(212, 175, 55, 0.18), transparent 30%), radial-gradient(circle at left center, rgba(184, 135, 27, 0.12), transparent 25%)",
      },
    },
  },
  plugins: [],
};

export default config;
