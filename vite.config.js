import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    hmr: {
      port: 5173,
      host: 'localhost'
    }
  },
  define: {
    global: 'globalThis'
  }
})
