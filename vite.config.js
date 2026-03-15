import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true // This allows us to test the PWA in localhost during the hackathon!
      },
      manifest: {
        name: 'AgroSynapse Farm Assistant',
        short_name: 'AgroSynapse',
        description: 'Offline-first AI farm monitoring for rural areas',
        theme_color: '#022c22',
        background_color: '#022c22',
        display: 'standalone',
        icons: [
          {
            src: 'https://cdn-icons-png.flaticon.com/512/1146/1146088.png', // Temporary hackathon icon
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            // This caches your FastAPI backend data!
            urlPattern: /^http:\/\/localhost:8000\/api\/nodes/,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'agro-api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 // Keep data for 24 hours offline
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],
})