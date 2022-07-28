import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  let mp;
  
  return (
    <Html style={{scrollBehavior : 'smooth'}}>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
