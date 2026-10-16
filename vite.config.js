
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  base: '/Marchica-Trips-/',
  plugins: [tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5050,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        activity: resolve(__dirname, 'activity.html'),
        faq: resolve(__dirname, 'faq.html'),
        reservation: resolve(__dirname, 'reservation.html'),
      },
    },
  },
})
