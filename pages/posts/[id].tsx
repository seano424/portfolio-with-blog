import {
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '@/components/Date'

type Post = {
  id: string
  title?: string
  date?: string
  contentHtml: string
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="dark:text-white">
      <div className="grid gap-3">
        <h1 className="text-4xl font-black capitalize xl:text-6xl">
          {post.title}
        </h1>
        <Date dateString={post.date!} />
      </div>
      <div
        className="prose my-5 max-w-none dark:text-white"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ id: string }>) => {
  const postData: Post = await getPostData(params!.id)
  return {
    props: {
      post: postData,
    },
  }
}
