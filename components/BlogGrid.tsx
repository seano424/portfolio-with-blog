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
    <div className="grid gap-6">
      {heading && (
        <h2 className="flex gap-3 text-4xl uppercase dark:text-white">
          {heading}
          <span className="text-base">{posts.length}</span>
        </h2>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <div className="grid h-min gap-6" key={post.id}>
            <BlogCard {...post} />
            {post.excerpt && (
              <p
                className={clsx(
                  'prose text-black transition-all duration-100 ease-linear dark:text-white xl:text-lg',
                  inter.className
                )}
              >
                {post.excerpt}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogGrid
