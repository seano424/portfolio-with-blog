import Image from 'next/image'
import projects from 'projects'
import GitHub from '@/icons/GitHub'

export default function Projects() {
  return (
    <section className="pl-base lg:pl-auto container py-10">
      <h1 className="h1">Recent Projects</h1>

      <div className="mt-10 flex flex-col gap-20">
        {projects.map((project, i) => (
          <div
            className="flex flex-col-reverse items-center gap-10 rounded-3xl p-5 shadow-2xl lg:grid lg:grid-cols-3"
            key={i}
          >
            <div className="grid gap-5 lg:col-span-1">
              <h3 className="h3 dark:text-white">{project.title}</h3>
              <p className="prose text-lg text-primary-900 transition-all duration-100 ease-linear dark:text-white md:text-xl">
                {project.excerpt}
              </p>
              <ul className="flex flex-wrap items-center gap-3">
                {project.tools.map((tool) => (
                  <li
                    className="list-none rounded-full border-4 border-primary-100 bg-primary-100 px-4 py-1 text-sm font-black uppercase tracking-widest dark:border-white dark:bg-white dark:text-primary-900"
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
            <div className="relative aspect-[1.77/1] w-full rounded-xl border-8 border-white lg:col-span-2 lg:h-[600px]">
              <Image
                className="rounded object-cover object-left-top"
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
