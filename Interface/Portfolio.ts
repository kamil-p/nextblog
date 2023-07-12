import { type MarkdownItem } from '@/Interface/Markdown'

export interface Portfolio extends MarkdownItem {
  covertImage: string
  employee: string
  employeeTime: number
  employeeImage: string
  highlights: string[]
}
