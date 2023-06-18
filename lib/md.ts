
import { join } from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { type MarkdownItem } from '@/Interface/Markdown'
import { type Blog } from '@/Interface/Blog'

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

export {
  getDir,
  getFileNames,
  getItemInPath,
  getAllItems
}
