import Link from 'next/link'
import { PostType } from '@/lib/types'
import Date from './Date'

const BlogCard = (props: PostType) => {
  const { tags, title, date, id } = props
  return (
    <Link href={`/posts/${id}`}>
      <div className="grid gap-5 rounded-xl bg-teal-100 p-5 font-mono shadow">
        <ul className="flex items-center gap-3">
          {tags &&
            tags.map((tag, i) => (
              <li
                key={i}
                className="rounded-full border border-black px-3 py-1 uppercase"
              >
                {tag}
              </li>
            ))}
        </ul>
        <h4 className="text-xl lg:text-2xl">{title}</h4>
        <Date dateString={date ?? ''} />
      </div>
    </Link>
  )
}

export default BlogCard
