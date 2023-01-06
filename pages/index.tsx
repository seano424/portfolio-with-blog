import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import { PostType } from '@/lib/types'
import BlogCard from '@/components/BlogCard'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts)

  return (
    <div className="grid gap-3 md:grid-cols-2">
      {posts.map((post) => (
        <div key={post.id}>
          <BlogCard {...post} />
          {post.excerpt && (
            <p className="prose transition-all duration-100 ease-linear dark:text-white">
              {post.excerpt}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  posts: PostType[]
}> = async () => {
  const allPostsData: PostType[] = getSortedPostsData()
  return {
    props: {
      posts: allPostsData,
    },
  }
}
