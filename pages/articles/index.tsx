import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import { PostType } from '@/lib/types'

import BlogGrid from '@/components/BlogGrid'

export default function index({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <BlogGrid posts={posts} heading="All Articles" />
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
