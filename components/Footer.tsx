import Link from 'next/link'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'
import { useRouter } from 'next/router'
import Sparkles from './Sparkles'

const socialLinks = [
  {
    name: 'Twitter Link',
    classes:
      'hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:hover:text-white dark:text-primary-blue',
    href: 'https://twitter.com/sea_oreilly',
    icon: 'Twitter',
  },
  {
    name: 'GitHub Link',
    classes:
      'hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200 dark:hover:text-primary',
    href: 'https://github.com/seano424',
    icon: 'GitHub',
  },
  {
    name: 'LinkedIn Link',
    classes:
      'hover:text-primary-blue transition-all duration-700 ease-linear text-primary dark:text-blue-200 dark:hover:text-white',
    href: 'https://www.linkedin.com/in/sea-oreilly/',
    icon: 'LinkedIn',
  },
]

export default function Footer() {
  const router = useRouter()

  return (
    <footer className="flex flex-col-reverse gap-5 pb-5">
      {router.pathname !== '/' && (
        <div className="flex justify-center gap-5">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              aria-label={link.name}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon === 'GitHub' && (
                <GitHub className="h-5 w-5 text-green-500 transition-all duration-300 ease-linear hover:text-primary-900 dark:text-green-200 dark:hover:text-primary-300" />
              )}
              {link.icon === 'Twitter' && (
                <Twitter className="h-5 w-5 text-blue-500 transition-all duration-200 ease-linear hover:text-primary-700 dark:text-primary-blue dark:hover:text-white" />
              )}
              {link.icon === 'LinkedIn' && (
                <LinkedIn className="h-5 w-5 text-primary-pink transition-all duration-700 ease-linear hover:text-primary-blue dark:text-blue-200 dark:hover:text-white" />
              )}
            </Link>
          ))}
        </div>
      )}
      <p className="text-center text-sm dark:text-white">
        © 2022 Sean O'Reilly. Front-end Developer. 🐋
      </p>
    </footer>
  )
}
