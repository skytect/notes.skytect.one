const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true,
})
module.exports = withNextra(
  {
    redirects: async function () {
      return [
        {
          source: '/hack/writeups/whitehacks-2022',
          destination: '/hack/writeups/whitehacks-2022/summary',
          permanent: true,
          locale: undefined,
        },
        {
          source: '/haxor/writeups/whitehacks-2022',
          destination: '/hack/writeups/whitehacks-2022/summary',
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
