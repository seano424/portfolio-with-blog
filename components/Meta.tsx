import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      {/* Title */}
      <title>Sean O'Reilly | Front-end Developer</title>
      <meta property="og:title" content="Sean O'Reilly's Personal Site" />
      <meta name="twitter:title" content="···" />

      {/* Description */}
      <meta
        name="description"
        content="Sean O'Reilly's Personal Site"
        key="desc"
      />
      <meta property="og:description" content="Sean O'Reilly's Personal Site" />
      <meta
        name="twitter:description"
        content="Sean O'Reilly's Personal Site"
      />

      {/* Image */}
      <meta property="og:image" content="/images/portfolio.png" />
      <meta name="twitter:image" content="/images/portfolio.png" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="viewport" content="width=1024" />

      {/* URL */}
      <link rel="canonical" href="https://www.seanpatrick.me" />
      <meta property="og:url" content="https://www.seanpatrick.me" />
      <meta name="twitter:url" content="https://www.seanpatrick.me" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
