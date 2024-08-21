await Bun.build({
  target: "bun",
  minify: true,
  entrypoints: ['./src/main'],
  outdir: './dist',
  external: [], // default: []
})

export {}