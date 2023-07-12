import { getAllItems, getDir, getFileNames, getItemInPath } from '@/lib/md'
import { type Portfolio } from '@/Interface/Portfolio'
import { join } from 'path'

const PORTFOLIO_DIR = getDir('/content/portfolios')

const getPortfolioFileNames = (): string[] => {
  return getFileNames(PORTFOLIO_DIR)
}

const getPortfolio = (fileName: string): Portfolio => {
  const portfolio = getItemInPath(join(PORTFOLIO_DIR, fileName)) as Portfolio
  portfolio.slug = fileName.replace(/\.md$/, '')
  return portfolio
}

const getPortfolios = (): Portfolio[] => {
  const names = getPortfolioFileNames()
  return getAllItems(names, getPortfolio) as Portfolio[]
}

export { getPortfolios }
