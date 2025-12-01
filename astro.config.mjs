// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://rodnm.github.io',
  base: '/portfolio_v1',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      scope: '/portfolio_v1/',
      base: '/portfolio_v1/',
      manifest: {
        name: 'Rodrigo Norabuena - Portfolio',
        short_name: 'RN Portfolio',
        description: 'Portafolio Profesional de Rodrigo Norabuena - Economista y Data Scientist',
        theme_color: '#440154',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        navigateFallback: '/404',
        maximumFileSizeToCacheInBytes: 5000000,
      },
      devOptions: {
        enabled: true,
        navigateFallbackAllowlist: [/^\/404$/],
      }
    })
  ]
});