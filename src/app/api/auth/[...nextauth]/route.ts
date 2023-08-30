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

        console.log(`next-auth : ${credentials.email}`)
        console.log(`next-auth : ${credentials.password}`)

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
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: { signIn: "/auth/signIn" },
  callbacks: {
    async jwt({ token, user }) {
      console.log(`jwt cb : ${token}`)
      return { ...token, ...user }
    },

    async session({ session, token }) {
      session.user = token as any
      console.log(session.user)
      return session
    },
  },
})

export { handler as GET, handler as POST }
