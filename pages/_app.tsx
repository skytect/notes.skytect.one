import { AppProps } from 'next/app'
import Prism from 'prism-react-renderer/prism'
import 'nextra-theme-docs/style.css'
import '../public/style.scss'

export default function Nextra({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Code highlighting
(typeof global !== "undefined" ? global : window).Prism = Prism
