import { type MarkdownItem } from '@/Interface/Markdown'

export interface Blog extends MarkdownItem {
  coverImage: string
  author: string
  authorImage: string
}
