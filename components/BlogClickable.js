import React from 'react'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

const BlogClickable = ({ frontMatter }) => {
  const { slug, date, title, summary, tags } = frontMatter
  return (
    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <dl>
        <dt className="sr-only">Published on</dt>
        <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{formatDate(date)}</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-4">
        <div className="space-y-1">
          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              <Link
                href={`/blog/${slug}`}
                className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
              >
                {title}
              </Link>
            </h2>
          </div>
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
          <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">{summary}</div>
        </div>
      </div>
    </div>
  )
}

export default BlogClickable
