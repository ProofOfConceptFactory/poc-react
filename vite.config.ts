import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8000,
    https: {
      key: fs.readFileSync('certs/poc-react.key.pem'),
      cert: fs.readFileSync('certs/poc-react.crt.pem'),
    },
  }
})
