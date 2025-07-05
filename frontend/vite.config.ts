import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: true,        // permite acesso externo (0.0.0.0)
    port: 5173,        // porta padrão do Vite
    strictPort: true,  // evita fallback de porta
    watch: {
      usePolling: true // necessário para ambientes como Docker
    }
  }
})
