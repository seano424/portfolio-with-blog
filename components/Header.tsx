import Link from 'next/link'
import ThemeButton from './ThemeButton'
import MenuIcon from './MenuIcon'

const links = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/',
    title: 'Projects',
  },
  {
    href: '/',
    title: 'About',
  },
  {
    href: '/',
    title: 'Articles',
  },
]

export default function Header() {
  return (
    <nav className="fixed z-40 flex h-20 w-full bg-opacity-90 py-4 filter backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <ul className="hidden items-center justify-center gap-12 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${link.href}`}
              className="button transform rounded-full px-5 py-4 text-lg  font-black  capitalize text-neutral-800 transition-all  duration-700 ease-linear hover:bg-gray-200/60 dark:text-light dark:hover:scale-110 dark:hover:bg-neutral-900/50 dark:hover:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </ul>
        <MenuIcon />
        <ThemeButton />
      </div>
    </nav>
  )
}
