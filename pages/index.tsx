import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import { PostType } from '@/lib/types'
import Hero from '@/components/Hero'
import BlogGrid from '@/components/BlogGrid'
import Projects from '@/components/Projects'

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Hero />
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
