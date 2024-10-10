import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Student-Data-node/",
  plugins: [react()],
  base:"/Student-Data-node-Edited/",
  server:{
    host:true
  }
})
