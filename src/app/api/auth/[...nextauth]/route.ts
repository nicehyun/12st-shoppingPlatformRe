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
          `${process.env.NEXTAUTH_URL}/api/auth/signIn`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
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
  pages: { signIn: "/auth/signIn" },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token as any

      return session
    },
  },
})

export { handler as GET, handler as POST }
