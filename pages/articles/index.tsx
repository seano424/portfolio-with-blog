import clsx from 'clsx'
import { Inter } from '@next/font/google'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import { getSortedPostsData } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import { PostType } from '@/lib/types'

const inter = Inter()

export default function index({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <section className="pl-base lg:pl-auto py-base container grid gap-6">
      <h2 className="h1 flex gap-1">
        All Articles
        <span className="text-lg lg:text-xl">{posts.length}</span>
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <div className="grid h-min gap-6" key={post.id}>
            <ArticleCard {...post} />
            {post.excerpt && (
              <p
                className={clsx(
                  'prose px-3 text-lg font-light text-primary-900 transition-all duration-100 ease-linear dark:text-white md:text-xl',
                  inter.className
                )}
              >
                {post.excerpt}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
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
