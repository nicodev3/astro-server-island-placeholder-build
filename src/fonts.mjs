import { fontProviders } from "astro/config";

export const siteFonts = [
  {
    provider: fontProviders.google(),
    name: "Manrope",
    cssVariable: "--font-manrope",
    weights: [400],
    styles: ["normal"],
    subsets: ["latin"],
    fallbacks: ["sans-serif"],
  },
];
