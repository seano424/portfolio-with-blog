import { Inter } from '@next/font/google'
import { PostType } from '@/lib/types'
import Link from 'next/link'
import Date from './Date'
import clsx from 'clsx'

const inter = Inter()

const BlogCard = (props: PostType) => {
  const { tags, title, date, id } = props
  return (
    <Link href={`/posts/${id}`}>
      <div
        className={clsx(
          'grid gap-5 rounded-xl bg-cyan-100 p-5 leading-loose shadow transition-all duration-100 ease-linear dark:bg-slate-800 dark:text-white',
          inter.className
        )}
      >
        <ul className="flex flex-wrap items-center gap-3">
          {tags &&
            tags.map((tag, i) => (
              <li
                key={i}
                className="rounded-full border border-black px-4 py-1 uppercase"
              >
                {tag}
              </li>
            ))}
        </ul>
        <h4 className="text-xl font-black md:text-2xl lg:text-3xl">{title}</h4>
        <Date dateString={date ?? ''} />
      </div>
    </Link>
  )
}

export default BlogCard
