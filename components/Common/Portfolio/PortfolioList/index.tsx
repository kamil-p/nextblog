import { type FC } from 'react'
import { PortfolioItem } from '@/components/Common/Portfolio/PortfolioList/PortfolioItem'
import { type Portfolio } from '@/Interface/Portfolio'

interface Props {
  portfolios: Portfolio[]
}

const PortfolioList: FC<Props> = ({ portfolios }) => {
  return (
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {portfolios.map((portfolio) => (
                <PortfolioItem key={portfolio.slug} portfolio={portfolio} />
            ))}
        </div>
  )
}

export default PortfolioList
