// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Slugfi - Slug Generator",
      short_name: "Slugfi",
      description: "Generate slugs for your projects",
      theme_color: "#ffffff",
      id: "/",
      icons: [
        {
          src: "assets/icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "assets/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: [
        "**/*.{js,css,html,png,svg,ico,webmanifest}",
        "**/manifest.webmanifest",
      ],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      // periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      // suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: "module",
    },
    registerType: "autoUpdate",
  },
  // nitro: {
  //   esbuild: {
  //     options: {
  //       target: "esnext",
  //     },
  //   },
  //   prerender: {
  //     routes: ["/"],
  //   },
  // },
  // imports: {
  //   autoImport: true,
  // },
});
