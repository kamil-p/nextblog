import { join } from 'path'
import { type Blog } from '@/Interface/Blog'
import { getDir, getFileNames, getItemInPath, getAllItems, markdownToHtml } from './md'

const BLOG_DIR = getDir('/content/blogs')

const getBlogFileNames = (): string[] => {
  return getFileNames(BLOG_DIR)
}

const getBlogSlugs = (): string[] => {
  return getBlogFileNames().map((name) => name.replace(/\.md$/, ''))
}

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog

  blog.slug = fileName.replace(/\.md$/, '')

  return blog
}

const getBlogBySlug = (slug: string): Blog => {
  return getBlog(`${slug}.md`)
}

const getBlogBySlugsWithMarkdown = async (slug: string): Promise<Blog> => {
  const blog = getBlogBySlug(slug)
  blog.content = await markdownToHtml(blog.content)

  return blog
}

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames()
  return getAllItems(names, getBlog) as Blog[]
}

export {
  getBlogFileNames,
  getBlog,
  getBlogs,
  getBlogBySlug,
  getBlogSlugs,
  getBlogBySlugsWithMarkdown
}
