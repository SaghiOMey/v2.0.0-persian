import { Html, Head, Main, NextScript } from 'next/document'
import logo from "../assests/saghiomey.png";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="shortcut icon" href="/saghiomey.ico" />
      <meta property="og:image" key="og:image" content={logo} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
