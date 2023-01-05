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
  console.log(post)

  return (
    <div>
      {post.title}
      <br />
      {post.id}
      <br />
      <Date dateString={post.date!} />
      <div
        className="prose"
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
