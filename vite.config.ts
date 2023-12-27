import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@component": path.resolve(__dirname, "./src/components/"),
      "@page": path.resolve(__dirname, "./src/pages/"),
      "@util": path.resolve(__dirname, "./src/utils/"),
      "@data": path.resolve(__dirname, "./src/data/"),
      "@asset": path.resolve(__dirname, "./src/assets/"),
      "@routes": path.resolve(__dirname, "./src/router/"),
    },
  },
});
