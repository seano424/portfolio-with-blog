import clsx from 'clsx'
import React from 'react'
import Link from 'next/link'
import { useAtom } from 'jotai'
import { useRouter } from 'next/router'
import { sideBarAtom, themeAtom } from 'store'
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
    x: -600,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
}

const mobileNavLinks = [
  {
    title: 'Home',
    href: 'home',
  },
  {
    title: 'Projects',
    href: 'projects',
  },
  {
    title: 'About',
    href: 'about',
  },
]

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useAtom(sideBarAtom)
  const [theme] = useAtom(themeAtom)
  const router = useRouter()

  const isDark = theme === 'isDark'

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsOpen(false)
    router.push(href)
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed z-30 flex min-h-screen w-full flex-col gap-8 md:w-2/3 lg:hidden"
        >
          <div className="absolute inset-0 shadow-2xl filter backdrop-blur"></div>
          <div className="container absolute inset-0 flex flex-col justify-center gap-20 md:pl-16">
            {mobileNavLinks.map((link, i) => (
              <a
                onClick={(e) => handleClick(e, link.href)}
                href={`/${link.href}`}
                key={link.title}
                className={clsx(
                  i === 0 && 'duration-200',
                  i === 1 && 'duration-300',
                  i === 2 && 'duration-500',
                  'p-1 text-left text-5xl font-black uppercase  tracking-tighter text-primary-blue transition-all ease-linear hover:text-fuchsia-400 dark:text-white dark:hover:text-cyan-300 sm:text-6xl md:text-7xl'
                )}
              >
                {link.title}
              </a>
            ))}
            <Link
              className='p-1 text-left text-5xl font-black uppercase  tracking-tighter text-primary-blue transition-all ease-linear hover:text-fuchsia-400 dark:text-white dark:hover:text-cyan-300 sm:text-6xl md:text-7xl duration-700'
              href="mailto:soreilly424@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
