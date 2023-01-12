import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { createClient } from 'next-sanity'
import { getSortedPostsData } from '@/lib/posts'
import { PostType } from '@/lib/types'
import BlogGrid from '@/components/BlogGrid'
import Link from 'next/link'
import GitHub from '@/icons/GitHub'
import Twitter from '@/icons/Twitter'
import LinkedIn from '@/icons/LinkedIn'

const socialLinks = [
  {
    name: 'Twitter Link',
    classes:
      'hover:text-primary transition-all duration-200 ease-linear text-blue-500 dark:hover:text-white dark:text-secondary',
    href: 'https://twitter.com/sea_oreilly',
    icon: 'Twitter',
  },
  {
    name: 'GitHub Link',
    classes:
      'hover:text-primary transition-all duration-300 ease-linear text-green-500 dark:text-green-200 dark:hover:text-primary',
    href: 'https://github.com/seano424',
    icon: 'GitHub',
  },
  {
    name: 'LinkedIn Link',
    classes:
      'hover:text-secondary transition-all duration-700 ease-linear text-primary dark:text-blue-200 dark:hover:text-white',
    href: 'https://www.linkedin.com/in/sea-oreilly/',
    icon: 'LinkedIn',
  },
]

const client = createClient({
  projectId: 'n93acrcs',
  dataset: 'production',
  apiVersion: '2023-01-10',
  useCdn: false,
})

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="flex min-h-[40px] justify-center space-x-8">
        {socialLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={link.classes}
            aria-label={link.name}
            target="_blank"
            rel="noreferrer"
          >
            {link.icon === 'GitHub' && (
              <GitHub className="h-8 w-8 text-green-500 transition-all duration-300 ease-linear hover:text-primary-pink dark:text-green-200 dark:hover:text-primary-pink" />
            )}
            {link.icon === 'Twitter' && (
              <Twitter className="h-8 w-8 text-blue-500 transition-all duration-200 ease-linear hover:text-primary-pink dark:text-secondary dark:hover:text-white" />
            )}
            {link.icon === 'LinkedIn' && (
              <LinkedIn className="h-8 w-8 text-primary-pink transition-all duration-700 ease-linear hover:text-secondary dark:text-blue-200 dark:hover:text-white" />
            )}
          </Link>
        ))}
      </div>
      <BlogGrid posts={posts} heading="Articles" />
    </>
  )
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
