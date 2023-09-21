import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import Image from './Image'
import Link from './Link'
import TOCInline from './TOCInline'
import Pre from './Pre'
import AuthorLayout from '@/layouts/AuthorLayout'
import ListLayout from '@/layouts/ListLayout'
import PostLayout from '@/layouts/PostLayout'

export const MDXComponents = {
  Image,
  TOCInline,
  a: Link,
  pre: Pre,
  wrapper: ({ components, layout, ...rest }) => {
    const Layout = import(`../layouts/${layout}`).default
    return <PostLayout {...rest} />
  },
}

export const MDXLayoutRenderer = ({ layout, mdxSource, ...rest }) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout layout={layout} components={MDXComponents} {...rest} />
}
