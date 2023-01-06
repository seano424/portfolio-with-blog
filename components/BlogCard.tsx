import { Roboto_Mono } from '@next/font/google'
import { PostType } from '@/lib/types'
import Link from 'next/link'
import Date from './Date'
import clsx from 'clsx'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

const BlogCard = (props: PostType) => {
  const { tags, title, date, id } = props
  return (
    <Link href={`/posts/${id}`}>
      <div
        className={clsx(
          'grid gap-5 rounded-xl bg-cyan-100 p-5 shadow transition-all duration-100 ease-linear dark:bg-slate-800 dark:text-white',
          robotoMono.className
        )}
      >
        <ul className="flex items-center gap-3">
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
        <h4 className="text-xl md:text-2xl lg:text-3xl">{title}</h4>
        <Date dateString={date ?? ''} />
      </div>
    </Link>
  )
}

export default BlogCard
