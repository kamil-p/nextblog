
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { type MarkdownItem } from '@/Interface/Markdown'
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

export {
  getDir,
  getFileNames,
  getItemInPath,
  getAllItems,
  markdownToHtml
}
