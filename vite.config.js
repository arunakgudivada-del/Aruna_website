import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' && !process.env.VERCEL ? '/Aruna_website/' : '/',
  plugins: [react()],
}))
