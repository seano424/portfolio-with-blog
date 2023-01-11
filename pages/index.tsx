import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createClient } from 'next-sanity'
import { getSortedPostsData } from '@/lib/posts'
import { PostType } from '@/lib/types'
import BlogGrid from '@/components/BlogGrid'

const client = createClient({
  projectId: 'n93acrcs',
  dataset: 'production',
  apiVersion: '2023-01-10',
  useCdn: false,
})

export default function Home({
  posts,
  sanityPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(sanityPosts)

  return <BlogGrid posts={posts} heading="Articles" />
}

export const getStaticProps: GetStaticProps<{
  posts: PostType[]
  sanityPosts: any
}> = async () => {
  const allPostsData: PostType[] = getSortedPostsData()
  const sanityPosts = await client.fetch(`*[_type == "post"]`)
  return {
    props: {
      posts: allPostsData,
      sanityPosts,
    },
  }
}
