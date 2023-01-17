import Image from 'next/image'
import Link from 'next/link'
import projects from 'projects'
import GitHub from '@/icons/GitHub'

export default function Projects() {
  return (
    <section className="pl-base lg:pl-auto container my-24">
      <h2 className="text-5xl font-black uppercase tracking-tighter text-primary-900 sm:text-7xl">
        <span className="bg-gradient-to-r from-primary-900 to-primary-blue bg-clip-text text-transparent dark:from-primary-100 dark:to-primary-700">
          Recent{' '}
        </span>
        <span className="bg-gradient-to-r from-primary-blue to-primary-100 bg-clip-text pr-5   text-transparent">
          Projects
        </span>
      </h2>

      <div className="mt-10">
        {projects.map((project, i) => (
          <div
            className="flex flex-col-reverse items-center gap-10 lg:flex-row"
            key={i}
          >
            <div className="grid gap-5">
              <h4 className="font-mono text-xl font-black tracking-tighter dark:text-primary-100 md:text-3xl">
                {project.title}
              </h4>
              <p className="prose text-lg text-primary-900 transition-all duration-100 ease-linear dark:text-white md:text-xl">
                {project.excerpt}
              </p>
              <ul className="flex flex-wrap items-center gap-3">
                {project.tools.map((tool) => (
                  <li
                    className="list-none rounded-full border-4 border-primary-100 bg-primary-900 px-4 py-1 text-sm font-semibold uppercase tracking-tighter text-light dark:border-white dark:bg-primary-100 dark:text-primary-900"
                    key={tool}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3">
                <a className="primary-button" href={project.link}>
                  Visit Site
                </a>
                <a
                  href={project.github}
                  className="group flex items-center justify-center rounded-full border-4 p-3 transition-all duration-200 ease-linear hover:border-primary-300 dark:hover:border-primary-100"
                >
                  <span className="sr-only">GitHub</span>
                  <GitHub className="h-7 w-7 font-black text-emerald-500 transition-all duration-300 ease-linear group-hover:scale-105 group-hover:text-primary-500 dark:text-green-200 dark:group-hover:text-primary-100 lg:h-8 lg:w-8" />
                </a>
              </div>
            </div>
            <div className="relative aspect-[1.77/1] w-full rounded-xl border-8 border-white lg:h-[420px]">
              <Image
                className="rounded object-cover object-top"
                src={project.image}
                alt="project image"
                fill
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
