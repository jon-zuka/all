const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  output: 'standalone',
  distDir: 'dist',
})

module.exports = withNextra({
  output: 'standalone',
  distDir: 'dist',
})
