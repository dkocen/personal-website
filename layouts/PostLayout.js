import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import {
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
} from 'react-share'
import { SocialIcon } from 'react-social-icons'
import { HiOutlinePencil, HiOutlineClock } from 'react-icons/hi'
import { BsCalendarDate } from 'react-icons/bs'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, images, tags, wordCount, timeToRead } = frontMatter
  const postUrl = `${siteMetadata.siteUrl}/blog/${slug}`
  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment lyketId={slug} />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-5">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      <BsCalendarDate className="-mt-1.5 mr-1.5 inline h-4 w-4" />
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex justify-center gap-5 py-4">
                <span className="flex items-center gap-1.5">
                  <HiOutlinePencil className="h-5 w-5" />
                  {wordCount} words
                </span>
                <span className="flex items-center gap-1.5">
                  <HiOutlineClock className="h-5 w-5" />
                  {timeToRead}
                </span>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="38"
                          height="38"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                          blurDataURL="/static/images/SVG-placeholder.png"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>
              <div className="grid place-items-center pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-4">
                  <FacebookShareButton
                    url={postUrl}
                    quote={title}
                    className="flex items-center overflow-hidden rounded-full !bg-[#1877f2] hover:scale-110"
                  >
                    <SocialIcon
                      network="facebook"
                      style={{ height: 35, width: 35 }}
                      fgColor="#fff"
                      bgColor="#1877f2"
                    />
                  </FacebookShareButton>
                  <EmailShareButton
                    body={'Check out this blog'}
                    subject={title}
                    separator=" : "
                    url={postUrl}
                    className="flex items-center overflow-hidden rounded-full !bg-[#B61AC1] hover:scale-110"
                  >
                    <SocialIcon
                      network="email"
                      style={{ height: 35, width: 35 }}
                      fgColor="#fff"
                      bgColor="#B61AC1"
                    />
                  </EmailShareButton>
                  <LinkedinShareButton
                    summary={'Check out this blog'}
                    title={title}
                    source={siteMetadata.siteUrl}
                    url={postUrl}
                    className="flex items-center overflow-hidden rounded-full !bg-[#0072b1] hover:scale-110"
                  >
                    <SocialIcon
                      network="linkedin"
                      style={{ height: 35, width: 35 }}
                      fgColor="#fff"
                      bgColor="#0072b1"
                    />
                  </LinkedinShareButton>
                  <RedditShareButton
                    title={title}
                    url={postUrl}
                    className="flex items-center overflow-hidden rounded-full !bg-[#ff4500] hover:scale-110"
                  >
                    <SocialIcon
                      network="reddit"
                      style={{ height: 35, width: 35 }}
                      fgColor="#fff"
                      bgColor="#ff4500"
                    />
                  </RedditShareButton>
                  <WhatsappShareButton
                    title={title}
                    separator={' : '}
                    url={postUrl}
                    className="flex items-center overflow-hidden rounded-full !bg-[#25D366] hover:scale-110"
                  >
                    <SocialIcon
                      network="whatsapp"
                      style={{ height: 35, width: 35 }}
                      fgColor="#fff"
                      bgColor="#25D366"
                    />
                  </WhatsappShareButton>
                </div>
              </div>
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="pb-1 text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Previous Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Next Article
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Back to the blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
