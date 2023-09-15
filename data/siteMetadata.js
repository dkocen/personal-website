const siteMetadata = {
  title: 'Blog | David Kocen',
  author: 'David Kocen',
  headerTitle: 'Conversations with David',
  description: 'my personal blog',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://davidkocen.com',
  siteRepo: 'https://github.com/dkocen/personal-website',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'dkocen0@gmail.com',
  github: 'https://github.com/dkocen',
  linkedin: 'https://www.linkedin.com/in/david-kocen/',
  website: 'https://davidkocen.com',
  weather:
    'https://weather.com/weather/today/l/e5df6df1b95181d6ea367f0efdfb0c5deb7119883497c8dde394caa80321b71a',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: 'G-QEJ38RXMTN',
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
