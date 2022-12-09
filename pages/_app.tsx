import { ReactNode } from 'react'
import { AppLayoutProps } from 'next/app'
import Prism from 'prism-react-renderer/prism'
import 'nextra-theme-docs/style.css'

import '@/styles/style.scss'
import '@/styles/github-repo-card.scss'

export default function Nextra({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page)
  return getLayout(<Component {...pageProps} />)
}

// Code highlighting
;(typeof global !== 'undefined' ? global : window).Prism = Prism

require('prismjs/components/prism-java')
require('prismjs/components/prism-docker')
