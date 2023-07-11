
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { type MarkdownItem, type SearchContent } from '@/Interface/Markdown'
import { type Blog } from '@/Interface/Blog'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

const getDir = (path: string): string => join(process.cwd(), path)

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir)
}

const getItemInPath = (filePath: string): Partial<Blog> => {
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContent)
  return { ...data, content }
}

const getAllItems = (
  fileNames: string[],
  get: (name: string) => MarkdownItem
): MarkdownItem[] => {
  return fileNames.map((name) => get(name))
}

const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark().use(remarkHtml).use(remarkGfm).process(markdown)

  return result.toString()
}

const saveSearchData = (blogs: Blog[]): void => {
  const searchFile = getDir('content/search/index.json')
  const searchItemList: SearchContent[] = []

  blogs.forEach((blog) => {
    const searchItem: SearchContent = {
      slug: blog.slug,
      title: blog.title,
      description: blog.description,
      category: 'blogs'
    }
    searchItemList.push(searchItem)
  })

  fs.writeFileSync(searchFile, JSON.stringify(searchItemList, null, 2))
}

export {
  getDir,
  getFileNames,
  getItemInPath,
  getAllItems,
  markdownToHtml,
  saveSearchData
}
