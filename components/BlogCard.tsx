import { PostType } from '@/lib/types'
import Link from 'next/link'
import Date from './Date'
import clsx from 'clsx'

const BlogCard = (props: PostType) => {
  const { tags, title, date, id } = props
  return (
    <Link href={`/posts/${id}`}>
      <div
        className={clsx(
          'grid gap-10 rounded-xl border-4 border-primary-300 bg-primary-100 p-5 leading-loose text-slate-900 shadow transition-all duration-100 ease-linear dark:border-white'
        )}
      >
        <ul className="flex flex-wrap items-center gap-3">
          {tags &&
            tags.map((tag, i) => (
              <li
                key={i}
                className={clsx(
                  'rounded-full border-2 border-white bg-primary-100 px-4 py-1 text-xs font-semibold uppercase tracking-tighter'
                )}
              >
                {tag}
              </li>
            ))}
        </ul>
        <h4
          className={clsx(
            'font-mono text-xl font-black tracking-tighter md:text-3xl'
          )}
        >
          {title}
        </h4>
        <Date dateString={date ?? ''} />
      </div>
    </Link>
  )
}

export default BlogCard
