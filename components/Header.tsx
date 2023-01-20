import Link from 'next/link'
import Image from 'next/image'
import MenuIcon from './MenuIcon'
import ThemeButton from './ThemeButton'

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
  return (
    <nav className="fixed z-40 flex h-20 w-full bg-light bg-transparent bg-opacity-90 py-4 filter backdrop-blur-sm transition-all duration-75 ease-linear dark:bg-transparent dark:bg-dark xl:bg-inherit">
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
                className="button transform rounded-full px-5 py-4 text-3xl font-black tracking-tighter transition-all  duration-700 ease-linear hover:bg-gray-200/60 dark:text-light dark:hover:scale-110 dark:hover:bg-neutral-900/50 dark:hover:text-gray-100"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <MenuIcon />
        <ThemeButton />
      </div>
    </nav>
  )
}
