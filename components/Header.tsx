import Link from 'next/link'
import Image from 'next/image'
import MenuIcon from './MenuIcon'
import ThemeButton from './ThemeButton'
import { useScroll, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const links = [
  {
    href: '',
    title: 'Home',
  },
  {
    href: 'projects',
    title: 'Projects',
  },
  {
    href: 'about',
    title: 'About',
  },
  {
    href: 'articles',
    title: 'Articles',
  },
]

export default function Header() {
  const { scrollYProgress } = useScroll()
  const [scrollPosition, setScrollPosition] = useState(0)
  const router = useRouter()

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollYProgress])

  let status = scrollYProgress.get() > 0.5 ? 'complete' : 'active'

  return (
    <motion.nav
      animate={status}
      className="fixed z-40 flex h-20 w-full bg-light bg-transparent bg-opacity-90 py-4 filter backdrop-blur-sm transition-all duration-200 ease-linear dark:bg-transparent"
    >
      {router.pathname === '/articles' && (
        <motion.div
          initial={false}
          variants={{
            active: {
              backgroundColor: 'var(--primary-100)',
            },
            complete: {
              backgroundColor: 'var(--primary-300)',
            },
          }}
          transition={{ duration: 0.5 }}
          style={{
            scaleX: scrollYProgress,
          }}
          className="absolute left-0 right-0 top-0 h-1 origin-left transform  lg:hidden"
        ></motion.div>
      )}
      <div className="container flex items-center justify-between">
        <Link
          href="/"
          className="button relative hidden h-12 w-12 rounded-full bg-fuchsia-50 lg:block"
          aria-label="Link back to homepage"
        >
          <Image
            className="rounded-full object-cover"
            src="/images/wave.png"
            alt="Back to homepage image link"
            priority
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Link>
        <ul className="hidden items-center justify-center gap-12 lg:flex">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                href={`/${link.href}`}
                className={clsx(
                  'button transform rounded-full px-5 py-4 text-3xl font-black tracking-tighter transition-all  duration-500 ease-linear hover:bg-gray-200/60 dark:text-light dark:hover:scale-110 dark:hover:text-gray-100',
                  scrollPosition > 140
                    ? 'dark:hover:bg-neutral-900/50'
                    : 'dark:hover:bg-light/30'
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <MenuIcon />
        <ThemeButton />
      </div>
    </motion.nav>
  )
}
