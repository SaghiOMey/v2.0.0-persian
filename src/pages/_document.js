/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/inline-script-id */
import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <script
          async
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
      ></script> */}
      <script
      dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-M7DBDR7');`,
      }}
      />
      <link rel="shortcut icon" href="/saghiomey.ico" />
      <link href="https://saghiomey.netlify.app/feed.xml" rel="alternate" type="application/rss+xml"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript
         dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?GTM-M7DBDR7" height="0" width="0" style="display: none; visibility: hidden;" />`,
        }}
  />
      </body>
    </Html>
  )
}
