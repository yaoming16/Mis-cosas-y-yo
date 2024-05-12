import { resolve } from "path";
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  target: "esnext",
  base: "/Mis-cosas-y-yo/",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        search: resolve(root, "search", "index.html"),
        music: resolve(root, "MusicPage", "index.html"),
      },
    },
  },
});
