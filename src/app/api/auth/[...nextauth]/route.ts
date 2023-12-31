import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "user-credentials",

      name: "Credentials",

      credentials: {
        email: {
          label: "이메일",
          type: "text",
        },
        password: { label: "비밀번호", type: "password" },
      },

      async authorize(credentials, req) {
        if (!credentials || !credentials.email || !credentials.password)
          return null

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signIn`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            next: { revalidate: 0 },
          }
        )

        const user = await response.json()

        if (user) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    maxAge: 24 * 60 * 60,
  },
  pages: { signIn: "/signIn" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
        token.accessToken = user.accessToken
      }
      return token
    },

    async session({ session, token }) {
      session.user.email = token.email
      session.user.accessToken = token.accessToken as string | null | undefined

      return session
    },
  },
})

export { handler as GET, handler as POST }
