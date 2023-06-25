import Head from 'next/head'
import { Footer, Navbar } from '@/components/Common'
import { type FC, type ReactElement } from 'react'

interface ChildrenType {
  children: ReactElement[]
  pageTitle: string
}

const PageLayout: FC<ChildrenType> = ({ children, pageTitle }) => {
  return (
        <div>
            <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
                <Head>
                    <title>{pageTitle}</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="relative bg-white pb-8 lg:w-full lg:max-w-2xl">
                    <Navbar/>
                </div>

                <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl">
                    { children }
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default PageLayout
