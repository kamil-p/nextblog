import { join } from 'path'
import { type Blog } from '@/Interface/Blog'
import { getDir, getFileNames, getItemInPath, getAllItems } from './md'

const BLOG_DIR = getDir('/content/blogs')

const getBlogFileNames = (): string[] => {
  return getFileNames(BLOG_DIR)
}

const getBlog = (fileName: string): Blog => {
  const blog = getItemInPath(join(BLOG_DIR, fileName)) as Blog

  blog.slug = fileName.replace(/\.md$/, '')
  blog.content = ''
  return blog
}

const getBlogs = (): Blog[] => {
  const names = getBlogFileNames()
  return getAllItems(names, getBlog) as Blog[]
}

export {
  getBlogFileNames,
  getBlog,
  getBlogs
}
