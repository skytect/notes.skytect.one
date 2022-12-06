import Image from 'next/image'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  project: {
    link: 'https://github.com/skytect/notes.skytect.one', // GitHub link in the navbar
  },
  // Global
  docsRepositoryBase: 'https://github.com/skytect/notes.skytect.one/blob/main', // base URL for the docs repository
  useNextSeoProps() {
    return {
      titleTemplate: '%s — skytect',
    }
  },
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="come forth and step into my realm of kNoWLeDge"
        />
        <meta
          property="og:url"
          content={`https://notes.skytect.one${asPath}`}
        />
        <meta
          property="og:title"
          content={frontMatter.title || 'my random notes'}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            'come forth and step into my realm of kNoWLeDge'
          }
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
    )
  },
  // Navbar
  logo: (
    <>
      <Image src="/icons/icon-512.png" alt="" width={32} height={32}></Image>
      <span style={{ marginLeft: '.5em', fontWeight: 600 }}>skytect</span>
    </>
  ),
  // Sidebar
  sidebar: {
    defaultMenuCollapsedLevel: 2,
  },
  // TOC Sidebar
  toc: {
    float: true,
    title: 'On This Page',
  },
  feedback: {
    content: 'Question? Give feedback',
    labels: 'feedback',
  },
  editLink: {
    content: 'Edit this page',
  },
  // Footer
  footer: {
    text: (
      <a
        href="https://github.com/skytect/notes.skytect.one/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontWeight: 600 }}
      >
        GPLv3 {new Date().getFullYear()}
      </a>
    ),
  },
}
