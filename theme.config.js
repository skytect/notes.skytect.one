import Image from 'next/image'

export default {
  projectLink: 'https://github.com/skytect/notes.skytect.one', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/skytect/notes.skytect.one/blob/main', // base URL for the docs repository
  titleSuffix: ' — skytect',
  unstable_flexsearch: true,
  defaultMenuCollapsed: true,
  floatTOC: true,
  font: false,
  footerText: (
    <a
      href="https://github.com/skytect/notes.skytect.one/blob/main/LICENSE"
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline font-semibold"
    >
      GPLv3 {new Date().getFullYear()}
    </a>
  ),
  logo: (
    <>
      <Image src="/icons/icon-512.png" alt="" width={32} height={32}></Image>
      <span className="ml-2 font-semibold hidden md:inline">skytect</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="come forth and step into my realm of kNoWLeDge"
      />
      <meta name="og:title" content="my random notes" />
      <meta
        name="og:description"
        content="come forth and step into my realm of kNoWLeDge"
      />
      <meta name="apple-mobile-web-app-title" content="kNoWLeDge" />
      <link rel="icon" href="/icons/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />

      <link
        rel="preload"
        href="/fonts/Inter.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/JetBrainsMono.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  ),
}
