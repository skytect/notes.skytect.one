import Image from 'next/image'

export default {
  projectLink: 'https://github.com/skytect/notes.skytect.one', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/skytect/notes.skytect.one/blob/main', // base URL for the docs repository
  titleSuffix: ' — skytect',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  font: false,
  footer: true,
  footerText: `GPLv3 ${new Date().getFullYear()}`,
  footerEditLink: `Edit this page on GitHub`,
  floatTOC: true,
  logo: (
    <>
      <Image src="/icons/icon-512.png" alt="" width={32} height={32}></Image>
      <span className="ml-2 font-semibold hidden md:inline">skytect</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="description" content="come forth and step into my realm of kNoWLeDge" />
      <meta name="og:title" content="my random notes" />
      <meta name="og:description" content="come forth and step into my realm of kNoWLeDge" />
      <meta name="apple-mobile-web-app-title" content="kNoWLeDge" />

      <link rel="icon" href="/icons/favicon.ico" sizes="any" /> {/*32x32*/}
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" /> {/*180x180*/}
      <link rel='manifest' href='/manifest.json' />
    </>
  ),
  i18n: [
    { locale: "en", text: "English" },
    { locale: "zh", text: "中文" },
    { locale: "ja", text: "日本語" },
  ],
}
