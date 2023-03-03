import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/saghiomey.ico" />
      <meta name="description" content="des" />
      <meta property="og:image" key="og:image" content="/saghiomey.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
