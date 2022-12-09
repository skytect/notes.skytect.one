const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  staticImage: false,
})
module.exports = withNextra(
  {},
  {
    poweredByHeader: false,
    reactStrictMode: true,
  }
)
