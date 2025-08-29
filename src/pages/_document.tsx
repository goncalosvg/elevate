/* eslint-disable @next/next/next-script-for-ga */
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Title & Description */}
        <title>Elevate | Where the Crypto Elite Connect</title>
        <meta
          name="description"
          content="Join a private network of top-tier crypto traders, founders, and analysts. Get exclusive insights, real-time strategies, marketplace rewards, and direct access to proven experts in the crypto space."
        />
        <meta name="keywords" content="crypto trading community, crypto discord, trading signals, crypto experts, memecoin trading, blockchain analysis, crypto marketplace, trading education, solana trading, ethereum trading" />
        <meta name="author" content="Elevate" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://elevate.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elevate | Where the Crypto Elite Connect" />
        <meta
          property="og:description"
          content="Join an exclusive crypto trading community with top-tier traders, real-time insights, custom tools, and marketplace rewards. Connect with proven experts like Cupsey, Marcell, and Daumen."
        />
        <meta property="og:image" content="/ogbanner.png" />
        <meta property="og:url" content="https://elevate.com" />
        <meta property="og:site_name" content="Elevate" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Elevate | Where the Crypto Elite Connect" />
        <meta
          name="twitter:description"
          content="Join an exclusive crypto trading community with top-tier traders, real-time insights, custom tools, and marketplace rewards. Connect with proven experts."
        />
        <meta name="twitter:image" content="/ogbanner.png" />
        <meta name="twitter:site" content="@elevate" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" href="/favicons/smallfavicon.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicons/mediumfavicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicons/largefavicon.png" sizes="96x96" />
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/touch-ipad.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/touch-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/touch-ipad-ret.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
