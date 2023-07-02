import { type GetStaticPaths, type NextPage } from 'next/types'
import { PageLayout } from '@/components/Layout'
import { getBlogSlugs, getBlogBySlugsWithMarkdown } from '@/lib/blogs'
import { type GetStaticProps } from 'next'
import { type Blog } from '@/Interface/Blog'
import { type ParsedUrlQuery } from 'querystring'
import BlogHeader from '@/components/Common/Blog/BlogHeader'

interface Props {
  blog: Blog
}

const BlogDetail: NextPage<Props> = ({ blog }) => {
  return (
    <PageLayout pageTitle={blog.title}>
        <div className="w-2/3 m-auto">
            <BlogHeader blog={blog} />
            <article className="prose lg:prose-lg markdown-image-50">
                {/* Blog Content Here */}
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>
        </div>
        <div></div>
    </PageLayout>
  )
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  if (context.params == null) {
    return {
      notFound: true
    }
  }

  const { slug } = context.params
  const blog = await getBlogBySlugsWithMarkdown(slug)
  return {
    props: { blog }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getBlogSlugs()
  const paths = slugs.map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default BlogDetail
