import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const logo = () => {
  return (
    <img src='/jon-codewolf.png' alt='Jon Wolf' width={36} height={36} />
  )
}

const config: DocsThemeConfig = {
  logo,
  project: {
    link: 'https://github.com/jon-codewolf/website',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/jon-codewolf/website',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
