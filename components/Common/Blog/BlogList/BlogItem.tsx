import Link from 'next/link'
import Image from 'next/image'
import { type FC } from 'react'
import { type Blog } from '@/Interface/Blog'

interface Props {
  blog: Blog
}

export const BlogItem: FC<Props> = ({ blog }) => {
  return (
        <div key={blog.slug} className="group">
            <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                <Link href={`/blogs/${blog.slug}`}>
                    <div>
                        <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                            <Image
                                priority
                                layout="fill"
                                objectFit="cover"
                                src={blog.coverImage}
                                className="rounded-lg hover:cursor-pointer"
                                alt={''}
                            />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 font-bold">
                        <span aria-hidden="true" className="inset-0" />
                        { blog.title }
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        { blog.description }
                    </p>
                </div>
            </div>
            <Link
                href={`/blogs/${blog.slug}`}>
                <div className="text-sm font-bold text-gray-700">
                    Read More
                </div>
            </Link>
        </div>
  )
}
