import Image from 'next/image'
import Link from 'next/link'
import projects from 'projects'

export default function Projects() {
  return (
    <section className="pl-base lg:pl-auto container mb-10">
      <h2 className="text-5xl font-black uppercase tracking-tighter text-primary-900 sm:text-7xl">
        <span className="bg-gradient-to-r from-primary-900 to-primary-blue bg-clip-text text-transparent dark:from-primary-100 dark:to-primary-700">
          Recent{' '}
        </span>
        <span className="bg-gradient-to-r from-primary-blue to-primary-100 bg-clip-text pr-5   text-transparent">
          Projects
        </span>
      </h2>

      <div>
        {projects.map((project, i) => (
          <div className="flex items-center gap-10" key={i}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.excerpt}</p>
              <ul className="flex flex-wrap gap-3">
                {project.tools.map((tool) => (
                  <li className="list-none" key={tool}>
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[1.77/1] w-full rounded lg:h-80">
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
