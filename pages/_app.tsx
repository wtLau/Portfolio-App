// import '@assets/main.css'

import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeCustomProvider } from '@components/common'
import { Layout } from '@components/common'

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <ThemeCustomProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeCustomProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
