import * as JsSearch from 'js-search'
import searchIndex from 'content/search/index.json'
import { type SearchContent } from '@/Interface/Markdown'

class ContentIndexer {
  private static instance: ContentIndexer | null
  private searchEngine!: JsSearch.Search

  public static getInstance (): ContentIndexer {
    if (this.instance == null) { // check if instance is null
      this.instance = new this()
    }
    return this.instance
  }

  constructor () {
    this.buildIndex()
  }

  public search (query: string): SearchContent[] {
    return this.searchEngine.search(query) as SearchContent[]
  }

  private buildIndex (): void {
    this.searchEngine = new JsSearch.Search('slug')
    this.searchEngine.addIndex('title')
    this.searchEngine.addIndex('description')
    this.searchEngine.addDocuments(searchIndex)
  }
}

export default ContentIndexer.getInstance()
