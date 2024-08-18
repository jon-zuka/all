import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  server: {
    port: 7101
  },
  cacheDir: "../../../../node_modules/.vite",
  plugins: [solid()],
})
