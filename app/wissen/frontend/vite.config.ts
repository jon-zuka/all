import { defineConfig } from "vite";
import vike from "vike/plugin";
import vikeSolid from "vike-solid/vite";
import vikeNode from "vike-node/plugin";
import { resolve } from "path";
export default defineConfig(({ mode }) => ({
  // ssr: {
  //   noExternal: mode === "production" ? true : [],
  // },
  build: {
    emptyOutDir: true,
  },
  plugins: [
    vikeNode({
      entry: "server/index.ts",
      standalone: true
    }),
    vike({
      // Disable prerender because if build bug
      // prerender: true,
    }),
    vikeSolid(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname)
    },
  },
}));

export {};
