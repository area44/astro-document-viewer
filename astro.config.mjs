// @ts-check

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://area44.github.io",
  base: process.env.CI ? "/astro-document-viewer/" : undefined,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
