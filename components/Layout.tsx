import clsx from 'clsx'
import { useAtom } from 'jotai'
import { Inter } from '@next/font/google'
import { PropsWithChildren, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Meta from './Meta'
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
          <Meta />
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
