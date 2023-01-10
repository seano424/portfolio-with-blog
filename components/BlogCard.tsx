import { Inter, Space_Mono } from '@next/font/google'
import { PostType } from '@/lib/types'
import Link from 'next/link'
import Date from './Date'
import clsx from 'clsx'

const inter = Inter()
const mono = Space_Mono({ weight: '400' })

const BlogCard = (props: PostType) => {
  const { tags, title, date, id } = props
  return (
    <Link href={`/posts/${id}`}>
      <div
        className={clsx(
          'grid gap-5 rounded-xl border-4 border-[#caf0f8] bg-[#90e0ef] p-5 leading-loose shadow transition-all duration-100 ease-linear dark:border-white',
          mono.className
        )}
      >
        <ul className="flex flex-wrap items-center gap-3">
          {tags &&
            tags.map((tag, i) => (
              <li
                key={i}
                className={clsx(
                  'rounded-full border-2 border-white bg-[#caf0f8] px-4 py-1 text-xs font-semibold uppercase tracking-tighter',
                  inter.className
                )}
              >
                {tag}
              </li>
            ))}
        </ul>
        <h4 className="text-xl font-black md:text-2xl">{title}</h4>
        <Date dateString={date ?? ''} />
      </div>
    </Link>
  )
}

export default BlogCard
