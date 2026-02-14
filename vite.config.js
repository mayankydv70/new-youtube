import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/yt": {
        target: "http://suggestqueries.google.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/yt/, "")
      }
    }
  }
})

