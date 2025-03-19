import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from "fs";
import type { ServerOptions } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  
  // Définition explicite du type ServerOptions
  const serverConfig: ServerOptions = {
    host: true,
    port: 8000,
  };
  
  if (isDev) {
    serverConfig.https = {
      key: fs.readFileSync('certs/poc-react.key.pem'),
      cert: fs.readFileSync('certs/poc-react.crt.pem'),
    };
  }
  
  return {
    plugins: [react()],
    server: serverConfig
  }
})
