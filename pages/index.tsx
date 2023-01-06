import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import { PostType } from '@/lib/types'
import BlogGrid from '@/components/BlogGrid'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts)

  return <BlogGrid posts={posts} heading="Articles" />
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
