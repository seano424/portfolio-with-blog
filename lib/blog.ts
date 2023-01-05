import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogDirectory = path.join(process.cwd(), 'blogs')

export function getSortedBlogsData() {
  const fileNames = fs.readdirSync(blogDirectory)
  const allBlogsData: { id: string; date?: string }[] = fileNames.map(
    (fileName) => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      const matterResult = matter(fileContents)

      return {
        id,
        ...matterResult.data,
      }
    }
  )

  // Sort Posts By Date
  return allBlogsData.sort((a, b) => {
    if (a.date! < b.date!) {
      return 1
    } else {
      return -1
    }
  })
}
