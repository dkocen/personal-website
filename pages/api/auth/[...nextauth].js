import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    GithubProvider({
      clientId: process.env.NEXTAUTH_GITHUB_OAUTH_CLIENT_KEY,
      clientSecret: process.env.NEXTAUTH_URL_GITHUB_OAUTH_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXTAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET,
    }),
  ],
})
