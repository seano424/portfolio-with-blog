import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <title>
        Sean O'Reilly is a Web Developer, Front-end Developer, and Travel
        enthusiast
      </title>
      <meta
        property="og:title"
        content="Sean O'Reilly is a Web Developer, Front-end Developer, and Travel enthusiast"
      />
      <meta
        name="twitter:title"
        content="Sean O'Reilly is a Web Developer, Front-end Developer, and Travel enthusiast"
      />
      <meta
        name="description"
        content="I am a JavaScript-focused developer from Kansas City. I love building beautiful UI/UX"
        key="desc"
      />
      <meta
        property="og:description"
        content="I am a JavaScript-focused developer from Kansas City. I love building beautiful UI/UX"
      />
      <meta
        name="twitter:description"
        content="I am a JavaScript-focused developer from Kansas City. I love building beautiful UI/UX"
      />
      <meta name="robots" content="all" />
      <meta property="og:image" content="/images/portfolio.png" />
      <meta property="og:image:alt" content="Sean O'Reilly's Logo" />
      <meta name="twitter:image" content="/images/portfolio.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sean O'Reilly" />
      <meta property="og:url" content="https://www.seanoreilly.me" />
      <meta name="twitter:url" content="https://www.seanoreilly.me" />
      <link rel="canonical" href="https://www.seanoreilly.me" />
      <link rel="icon" href="/images/favicon.ico" />
    </Head>
  )
}
