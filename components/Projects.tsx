import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <section className="pl-base lg:pl-auto container mb-10">
      <h2 className="text-5xl font-black uppercase tracking-tighter text-primary-900 sm:text-7xl">
        <span className="bg-gradient-to-r from-primary-900 to-primary-blue bg-clip-text text-transparent dark:from-primary-100 dark:to-primary-700">
          Recent{' '}
        </span>
        <span className="bg-gradient-to-r from-primary-blue to-primary-100 bg-clip-text pr-5 text-transparent">
          Projects
        </span>
      </h2>
    </section>
  )
}
