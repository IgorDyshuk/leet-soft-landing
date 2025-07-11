import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        allowedHosts: ['partly-popular-airedale.ngrok-free.app'],
    },
    base: "/leet-soft-landing",
})
