import { defineConfig } from "astro/config";
import { siteFonts } from "./src/fonts.mjs";

export default defineConfig({
  fonts: siteFonts,
});
