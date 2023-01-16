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
    <section className="relative py-10">
      <div className="tranform absolute bottom-72 -left-[123%] right-0 -top-full z-0 -rotate-[20deg] bg-primary-100/40 transition-all ease-linear dark:opacity-0  lg:bottom-0"></div>
      <div className="container relative z-10 flex flex-col items-center gap-10">
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
            className="transform rounded-full border-4 border-primary-300 bg-light p-4 text-left text-xl font-extrabold text-primary-900 transition-all duration-300 ease-linear hover:scale-105 dark:border-white  dark:bg-primary-300 dark:text-primary-900 xl:text-2xl"
            target="_blank"
            rel="noreferrer noopener"
          >
            Get in contact!
          </a>
        </div>
      </div>
    </section>
  )
}
