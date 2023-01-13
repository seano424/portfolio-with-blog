import Link from 'next/link'
import ThemeButton from './ThemeButton'

const links = ['home', 'projects', 'about']

export default function Header() {
  return (
    <nav className="fixed z-40 flex h-20 w-full bg-opacity-90 filter backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        <ul className="hidden items-center justify-center gap-12 lg:flex">
          {links.map((link) => (
            <li key={link}>
              <Link
                href={`/${link}`}
                className="transform rounded-full px-5 py-4 text-lg font-black capitalize text-neutral-800 transition-all duration-300 ease-linear hover:bg-gray-200/60 dark:text-light dark:hover:scale-110 dark:hover:bg-neutral-900/50 dark:hover:text-gray-100"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeButton />
      </div>
    </nav>
  )
}
