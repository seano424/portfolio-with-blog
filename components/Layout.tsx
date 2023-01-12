import { PropsWithChildren, useEffect } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import { Inter } from '@next/font/google'
import { useAtom } from 'jotai'
import { themeAtom } from 'store'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useAtom(themeAtom)

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  return (
    <motion.div
      animate={{
        backgroundColor: theme === 'dark' ? 'var(--primary-black)' : '#fff',
      }}
      className={clsx(
        'flex min-h-screen flex-col transition-all duration-100 ease-linear',
        inter.className
      )}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container py-10">
        {/* <nav className="relative z-0 flex justify-around">
          <button className="peer/home flex-1 dark:text-white">Home</button>
          <button className="peer/about flex-1 dark:text-white">About</button>
          <button className="peer/services flex-1 dark:text-white">
            Services
          </button>
          <button className="peer/blog flex-1 dark:text-white">Blog</button>
          <button className="peer/contact flex-1 dark:text-white">
            Contact
          </button>

          <span className="absolute left-0 -z-10 h-full w-1/5 origin-center scale-x-110 scale-y-125 rounded-full bg-gray-100 transition-all duration-300 peer-focus/about:left-[20%] peer-focus/services:left-[40%] peer-focus/blog:left-[60%] peer-focus/contact:left-[80%] "></span>
        </nav> */}

        <button
          className="button my-4 w-max"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          toggle theme
        </button>

        {children}
      </main>
      <footer className="mt-auto flex justify-center gap-3">
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
      </footer>
    </motion.div>
  )
}

export default Layout
