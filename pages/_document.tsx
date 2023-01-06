import { Html, Head, Main, NextScript } from 'next/document'
import clsx from 'clsx'

export default function Document() {
  const devMode = process.env.ENVIRONMENT === 'dev'
  return (
    <Html lang="en">
      <Head />
      <body className={clsx(devMode && 'debug-screens')}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
