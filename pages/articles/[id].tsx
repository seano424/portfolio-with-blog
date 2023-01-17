import {
  GetStaticPaths,
  InferGetStaticPropsType,
  GetStaticPropsContext,
} from 'next'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '@/components/Date'
import { useRouter } from 'next/router'
import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { PostType } from '@/lib/types'

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { back } = useRouter()

  return (
    <div className="pl-base lg:pl-auto container pt-5 dark:text-white lg:pt-20">
      <div className="grid gap-3">
        <button
          onClick={() => back()}
          className="group mb-5 w-max transform rounded-3xl bg-dark px-4 py-3 transition-all duration-200 ease-linear hover:scale-105 dark:bg-light"
          aria-label="Go back button"
        >
          <ArrowLeftIcon className="h-4 w-4 transform text-light transition-all duration-200 ease-linear group-hover:scale-105 dark:text-dark" />
        </button>
        <h1 className="text-4xl font-black capitalize xl:text-6xl">
          {post.title}
        </h1>
        <Date dateString={post.date!} />
      </div>
      <div
        className="rich-text prose my-5 max-w-none dark:text-white"
        dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
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
  const postData: PostType = await getPostData(params!.id)
  return {
    props: {
      post: postData,
    },
  }
}
