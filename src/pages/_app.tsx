import React, { Fragment } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '~/styles/main.css'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  )
}
