import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Student-Data-node/",
  plugins: [react()],
  server:{
    host:true
  }
})
