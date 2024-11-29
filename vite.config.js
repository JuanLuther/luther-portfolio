import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio",
  build: {
    // outDir: "./root", // Set the output directory to the project root
    // emptyOutDir: false, // Prevent Vite from deleting other files in the root
    rollupOptions: {
      output: {
        // This ensures the 404.html is correctly handled
        entryFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
      },
    },
  },
});
