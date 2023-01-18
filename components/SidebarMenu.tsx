import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { sideBarAtom } from 'store'
import { AnimatePresence, motion } from 'framer-motion'

const mobileMenuVariants = {
  hidden: { x: -600 },
  show: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
  exit: {
    x: -1000,
    transition: {
      duration: 0.5,
      ease: 'linear',
    },
  },
}

const mobileNavLinks = [
  {
    title: 'Home',
    href: '',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Articles',
    href: 'articles',
  },
  {
    title: 'Projects',
    href: 'projects',
  },
]

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useAtom(sideBarAtom)
  const router = useRouter()

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsOpen(false)
    router.push(`/${href}`)
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed z-30 flex h-full min-h-screen w-full flex-col gap-8 lg:hidden"
        >
          <div className="absolute inset-0 shadow-2xl filter backdrop-blur"></div>
          <div className="container absolute inset-0 flex flex-col gap-10 bg-white/90 pt-40 dark:bg-white/0">
            {mobileNavLinks.map((link, i) => (
              <a
                onClick={(e) => handleClick(e, link.href)}
                key={link.title}
                href={`/${link.href}`}
                className={clsx(
                  i === 0 && 'duration-150',
                  i === 1 && 'duration-200',
                  i === 2 && 'duration-300',
                  i === 3 && 'duration-500',
                  'text-6xl font-black tracking-tighter text-dark transition-all ease-linear hover:text-fuchsia-500 dark:text-white dark:drop-shadow-2xl dark:hover:text-cyan-300 sm:text-8xl'
                )}
              >
                {link.title}
              </a>
            ))}
            <Link
              className="text-6xl font-black tracking-tighter text-dark transition-all duration-700 ease-linear hover:text-fuchsia-500 dark:text-white dark:drop-shadow-2xl dark:hover:text-cyan-300 sm:text-8xl"
              href="mailto:soreilly424@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Email Me
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
