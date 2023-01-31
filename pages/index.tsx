import Link from 'next/link'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'
import Image from 'next/image'
import Sparkles from '@/components/Sparkles'

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

export default function Home() {
  return (
    <section className="py-base relative overflow-hidden">
      <div className="tranform absolute bottom-72 -left-[123%] right-0 -top-full z-0 -rotate-[20deg] overflow-hidden transition-all ease-linear lg:bottom-0 xl:bottom-28 2xl:bottom-0">
        <div className="absolute inset-0 z-10 bg-white/30 dark:opacity-0"></div>
        <Image
          fill
          src="/images/water.png"
          className="translate-y-16 -scale-x-100 transform object-cover filter  dark:grayscale"
          alt="background image"
          sizes="100vw"
          priority
        />
      </div>
      <div className="pl-base lg:pl-auto container relative z-10 flex flex-col items-center gap-10">
        <div className="relative h-64 w-64 rounded-full border-8 border-white transition-all duration-200 ease-in-out dark:border-white xl:h-80 xl:w-80">
          <Image
            className="rounded-full object-cover"
            src="/images/me.png"
            alt="Personal Photo"
            priority
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>

        <h2 className="h2 xl:max-w-8xl text-center drop-shadow-2xl">
          Hi! 👋 My name is Sean. I build websites with modern tools &{' '}
          <Sparkles>technologies!</Sparkles>
        </h2>

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
                  <GitHub className="h-8 w-8 text-[#06d6a0] transition-all duration-300 ease-linear hover:text-primary-pink dark:text-emerald-200 dark:hover:text-primary-300" />
                )}
                {link.icon === 'Twitter' && (
                  <Twitter className="h-8 w-8 text-blue-500 transition-all duration-200 ease-linear hover:text-primary-blue dark:text-primary-blue dark:hover:text-white" />
                )}
                {link.icon === 'LinkedIn' && (
                  <LinkedIn className="h-8 w-8 text-primary-pink transition-all duration-700 ease-linear hover:text-primary-blue dark:text-blue-200 dark:hover:text-white" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-5">
          <a
            href="mailto:soreilly424@gmail.com"
            className="primary-button"
            target="_blank"
            rel="noreferrer noopener"
          >
            Let's get in touch!
          </a>

          <Link
            className="primary-button button border-4 border-black bg-white text-black transition-all duration-300 ease-linear"
            href="/about"
          >
            More about me
          </Link>
        </div>
      </div>
    </section>
  )
}
