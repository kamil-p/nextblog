import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { BlogList } from '@/components/Common/Blog'
import { PortfolioList } from '@/components/Common/Portfolio'
import { BaseLayout } from '@/components/Layout'
import { getBlogs } from '@/lib/blogs'
import { type Blog } from '@/Interface/Blog'
import PropTypes from 'prop-types'
import { saveSearchData } from '@/lib/md'

interface Props {
  blogs: Blog[]
}

const Home: NextPage<Props> = ({ blogs }) => {
  Home.propTypes = {
    blogs: PropTypes.array.isRequired
  }

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
            <BlogList blogs={blogs} />
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

export const getStaticProps: GetStaticProps = () => {
  const blogs = getBlogs()
  saveSearchData(blogs)
  return {
    props: { blogs }
  }
}

export default Home
