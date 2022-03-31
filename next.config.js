const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})
module.exports = withNextra(
  {
    i18n: {
      locales: ['en', 'zh', 'ja'],
      defaultLocale: 'en',
    },
    redirects: async function () {
      return [
        {
          source: '/haxor/:slug*',
          destination: '/hack/:slug*',
          permanent: true,
          locale: undefined,
        },
        {
          source: '/wobots/:slug*',
          destination: '/robo/:slug*',
          permanent: true,
          locale: undefined,
        },
        {
          source: '/lingooeystics/:slug*',
          destination: '/ling/:slug*',
          permanent: true,
          locale: undefined,
        },
        {
          source: '/hack/writeups/whitehacks-2022',
          destination: '/hack/writeups/whitehacks-2022/challs',
          permanent: true,
          locale: undefined,
        },
      ]
    },
  },
  {
    poweredByHeader: false,
    reactStrictMode: true,
  }
)
