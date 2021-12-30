import { AppProps } from "next/app";
import Head from "next/head";
import Prism from "prism-react-renderer/prism";
import "nextra-theme-docs/style.css";

import "../styles/style.scss";

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

// Code highlighting
(typeof global !== "undefined" ? global : window).Prism = Prism;
