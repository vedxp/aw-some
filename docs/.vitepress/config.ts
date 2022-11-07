import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "Aw-some",
  titleTemplate: false,
  description: "An awesome 🎉 collection of useful apps & websites curated with ♥️",
  lang: "en-US",
  appearance: true,
  cleanUrls: "without-subfolders",

  themeConfig: {
  footer: {
      message: "Released under the GPL-3.0 License.",
      copyright: "Copyright © 2022-present VedxP" },

  nav: [
    { text: 'GitHub', link: 'https://github.com/VedxP/aw-some' }
    ],
  }
})
