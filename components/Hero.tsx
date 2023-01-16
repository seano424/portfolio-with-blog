import Link from 'next/link'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'
import Image from 'next/image'

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

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="relative h-64 w-64 rounded-full border-8 border-primary-300 transition-all duration-200 ease-in-out dark:border-white xl:h-80 xl:w-80">
        <Image
          className="rounded-full object-cover"
          src="/images/me.png"
          alt="Personal Photo"
          priority
          fill
        />
      </div>

      <p className="text-center text-4xl font-black text-primary-900 transition-all duration-100 ease-linear dark:text-white xl:max-w-7xl xl:text-7xl">
        Hi! 👋 My name is Sean. I build websites with modern tools &
        technologies!
      </p>

      <div>
        <div className="flex justify-center gap-8">
          {socialLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={link.classes}
              aria-label={link.name}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon === 'GitHub' && (
                <GitHub className="h-8 w-8 text-green-500 transition-all duration-300 ease-linear hover:text-primary-pink dark:text-green-200 dark:hover:text-primary-pink" />
              )}
              {link.icon === 'Twitter' && (
                <Twitter className="h-8 w-8 text-blue-500 transition-all duration-200 ease-linear hover:text-primary-pink dark:text-primary-blue dark:hover:text-white" />
              )}
              {link.icon === 'LinkedIn' && (
                <LinkedIn className="h-8 w-8 text-primary-pink transition-all duration-700 ease-linear hover:text-primary-blue dark:text-blue-200 dark:hover:text-white" />
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <a
          href="mailto:soreilly424@gmail.com"
          className="transform rounded-full border-4 bg-primary-900 px-4 py-3 text-left text-lg font-black uppercase tracking-tighter text-light transition-transform duration-300 ease-linear hover:scale-125 dark:border-white "
          target="_blank"
          rel="noreferrer noopener"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}
