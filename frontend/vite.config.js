import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Load environment variables
const API_URL = 'http://localhost:8000';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
     
      '/api': {
        target: API_URL, // Replace with your backend API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optionally rewrite the URL
      },
    },
  },
});
