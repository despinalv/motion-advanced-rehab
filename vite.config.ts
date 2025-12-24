import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/motion-advanced-rehab/', // <--- ESTO ES CRUCIAL. Debe ser /Nombre-Del-Repo/
})
