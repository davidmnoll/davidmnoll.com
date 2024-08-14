import path from "path"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr'
import { defineConfig } from "vite"
import dotenv from 'dotenv'
 
dotenv.config() // load env vars from .env

export default defineConfig(() => {
  return {
  define: {
    __SYC_API_URL__: `"${process.env.SYC_API_URL}"` // wrapping in "" since it's a string
    // __SYC_MODE__: `"${process.env.SYC_MODE}"`, // wrapping in "" since it's a string
  },
  plugins: [
    react(),
    viteTsconfigPaths(), 
    svgr({ svgrOptions: { icon: true } }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}})