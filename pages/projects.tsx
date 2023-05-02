import Head from 'next/head'
import Projects from '@/components/Projects'

export default function Index() {
  return (
    <>
      <Head>
        <title>Here are some projects I've been working on</title>
        <meta
          name="description"
          content="I have built a lot of applications since I got started in 2020. Listed below is a non-exhaustive representation of what I have developed and deployed recently."
        ></meta>
      </Head>
      <Projects />
    </>
  )
}
