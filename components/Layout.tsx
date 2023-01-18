import clsx from 'clsx'
import Head from 'next/head'
import { useAtom } from 'jotai'
import { Inter } from '@next/font/google'
import { PropsWithChildren, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Header from './Header'
import Cursor from './Cursor'
import Footer from './Footer'
import { themeAtom } from 'store'
import SidebarMenu from './SidebarMenu'

const browser = typeof window !== 'undefined'
const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: PropsWithChildren) => {
  const [theme] = useAtom(themeAtom)

  useEffect(() => {
    console.log(
      '\n',
      'Hello there!',
      '\n',
      'Want to reach out?!',
      '\n',
      'Shoot me an email @',
      '\n',
      'soreilly424@gmail.com',
      '\n',
      '🤗'
    )
  }, [])

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  }

  return (
    <AnimatePresence initial={false}>
      {theme && (
        <motion.div
          transition={spring}
          animate={{
            backgroundColor: theme === 'dark' ? 'var(--dark)' : 'var(--light)',
          }}
          className={clsx(
            'flex min-h-screen flex-col transition-all duration-100 ease-linear dark:bg-opacity-25',
            inter.className
          )}
        >
          <Head>
            <title>Sean O'Reilly | Front-end Developer</title>
            <meta
              name="description"
              content="Sean O'Reilly's Web Development Portfolio"
              key="desc"
            />
            <meta
              property="og:title"
              content="Sean O'Reilly's Web Development Portfolio"
            />
            <meta
              property="og:description"
              content="Sean O'Reilly's Web Development Portfolio"
            />
            <meta property="og:image" content="/images/portfolio.png" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {browser && <Cursor />}
          <Header />
          <SidebarMenu />
          <main className="flex-1 py-20">{children}</main>
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Layout
