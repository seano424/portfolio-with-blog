import BlogCard from './BlogCard'
import { PostType } from '@/lib/types'
import { Inter } from '@next/font/google'
import clsx from 'clsx'

const inter = Inter()

interface BlogGridProps {
  heading?: string
  posts: PostType[]
}

const BlogGrid = ({ heading, posts }: BlogGridProps) => {
  return (
    <section className="pl-base lg:pl-auto container grid gap-6">
      {heading && (
        <h2 className="flex gap-1 text-5xl font-black uppercase tracking-tighter text-primary-900 sm:text-7xl">
          <span className="bg-gradient-to-r from-primary-900 to-primary-blue bg-clip-text pr-1 text-transparent dark:from-primary-100 dark:to-primary-700">
            {heading}
          </span>
          <span className="text-lg lg:text-xl">{posts.length}</span>
        </h2>
      )}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <div className="grid h-min gap-6" key={post.id}>
            <BlogCard {...post} />
            {post.excerpt && (
              <p
                className={clsx(
                  'prose px-3 text-lg font-light text-primary-900 transition-all duration-100 ease-linear dark:text-white md:text-xl',
                  inter.className
                )}
              >
                {post.excerpt}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogGrid
