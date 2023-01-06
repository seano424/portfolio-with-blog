import BlogCard from './BlogCard'
import { PostType } from '@/lib/types'
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
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <div className="grid gap-6" key={post.id}>
            <BlogCard {...post} />
            {post.excerpt && (
              <p className="prose transition-all duration-100 ease-linear dark:text-white">
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
