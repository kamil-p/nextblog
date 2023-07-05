
export interface MarkdownItem {
  title: string
  description: string
  slug: string
  date: string
  content: string
}

export interface SearchContent extends Partial<MarkdownItem> {
  category: string
}
