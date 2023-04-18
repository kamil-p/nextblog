import type { NextPage } from 'next'
import Link from 'next/link'
import { BlogList } from '@/components/Common/Blog'
import { PortfolioList } from '@/components/Common/Portfolio'
import { BaseLayout } from '@/components/Layout'

const Home: NextPage = () => {
  return (
        <BaseLayout>
            <h2
                className="text-2xl font-bold tracking-tight text-gray-900">
                Newest Blogs
                <Link href="/blogs">
                    <div className='text-sm ml-1 text-indigo-600'>
                        (See All)
                    </div>
                </Link>
            </h2>
            <BlogList />
            <br></br>
            <h2
                className="text-2xl font-bold tracking-tight text-gray-900">
                Portfolios
                <Link href="/portfolios">
                    <div className='text-sm ml-1 text-indigo-600'>
                        (See All)
                    </div>
                </Link>
            </h2>
            <PortfolioList />
        </BaseLayout>
  )
}

export default Home
