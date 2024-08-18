import { defineConfig } from "vite";
import vike from "vike/plugin";
import vikeSolid from "vike-solid/vite";

export default defineConfig({
  cacheDir: "../../../../node_modules/.vite",
  server: {
    port: 7102,
  },
  plugins: [
    vikeSolid(),
    vike({
      prerender: true
    }),
  ],
});
