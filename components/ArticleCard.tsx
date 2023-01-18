import { PostType } from '@/lib/types'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Date from './Date'
import clsx from 'clsx'

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
          <ul className="flex flex-wrap items-center gap-3">
            {tags &&
              tags.map((tag, i) => (
                <li
                  key={i}
                  className="rounded-full border-2 border-white bg-primary-100 px-4 py-1 text-sm font-semibold uppercase tracking-tighter text-primary-900"
                >
                  {tag}
                </li>
              ))}
          </ul>
          <Bars3BottomRightIcon className="h-7 w-7 flex-shrink-0 -scale-x-100 transform rounded-3xl border-2 border-white p-1 text-white transition-all duration-200 ease-linear hover:-scale-x-125 hover:scale-y-125" />
        </div>
        <h3 className="h3">{title}</h3>
        <Date dateString={date ?? ''} card />
      </div>
    </Link>
  )
}

export default ArticleCard
