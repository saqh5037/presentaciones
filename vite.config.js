import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4321,
    host: '0.0.0.0', // Escuchar en todas las interfaces
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.trycloudflare.com', // Permitir todos los subdominios de Cloudflare
      '.loca.lt', // Permitir LocalTunnel también
      '187.217.150.22', // Tu IP pública
      '189.172.8.175', // IP pública actual
      '192.168.1.125' // Tu IP local
    ],
    proxy: {
      '/api': {
        target: 'http://localhost:4323',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path
      }
    }
  }
})
