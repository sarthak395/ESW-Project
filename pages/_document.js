import { Html,Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className='overflow-x-hidden'>
      <Head >
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></Script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}