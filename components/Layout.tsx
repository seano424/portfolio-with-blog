import clsx from 'clsx'
import Head from 'next/head'
import { useAtom } from 'jotai'
import { Inter } from '@next/font/google'
import { PropsWithChildren, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SidebarMenu from './SidebarMenu'

import Cursor from './Cursor'
import Header from './Header'
import { themeAtom } from 'store'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: PropsWithChildren) => {
  const [theme] = useAtom(themeAtom)
  const [mounted, setMounted] = useState(false)

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
    setMounted(true)
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
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {mounted && <Cursor />}
          <Header />
          <SidebarMenu />
          <main className="flex-1 py-20">{children}</main>
          <footer className="flex justify-center gap-3 py-5 text-sm text-black dark:text-white">
            <p>© 2022 Sean O'Reilly. Front-end Developer. 🐋</p>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Layout
