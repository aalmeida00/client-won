import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="a simple boilerplate to use TS + Next"
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default App
