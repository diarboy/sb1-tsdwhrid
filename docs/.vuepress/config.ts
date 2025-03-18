import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Project Documentation',
  description: 'Documentation for Vue + Vitawind project',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Back to App', link: 'http://localhost:5173' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
          ],
        },
      ],
    },
  }),
})