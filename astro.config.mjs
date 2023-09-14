import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://area44.github.io',
  base: '/astro-document-viewer',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
