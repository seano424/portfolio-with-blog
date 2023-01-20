import clsx from 'clsx'
import Link from 'next/link'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import { PostType } from '@/lib/types'
import Date from './Date'

const ArticleCard = (props: PostType) => {
  const { tags, title, date, id } = props

  return (
    <Link href={`/articles/${id}`}>
      <div
        className={clsx(
          'grid gap-10 rounded-3xl border-8 border-primary-900 p-5 leading-loose text-slate-900 shadow transition-all duration-100 ease-linear dark:border-white dark:bg-primary-300'
        )}
      >
        <div className="flex items-start gap-5">
          <ul className="flex flex-wrap items-center gap-1">
            {tags &&
              tags.map((tag, i) => (
                <li
                  key={i}
                  className="rounded-full border-8 border-white bg-primary-100 px-4 py-3 text-sm font-black uppercase tracking-tighter text-primary-900"
                >
                  {tag}
                </li>
              ))}
          </ul>
          <Bars3BottomRightIcon className="h-7 w-7 flex-shrink-0 -scale-x-100 transform rounded-3xl border-2 border-primary-900 p-1 transition-all duration-200 ease-linear hover:-scale-x-125 hover:scale-y-125 dark:border-white dark:text-white" />
        </div>
        <h3 className="h3">{title}</h3>
        <Date dateString={date!} card />
      </div>
    </Link>
  )
}

export default ArticleCard
