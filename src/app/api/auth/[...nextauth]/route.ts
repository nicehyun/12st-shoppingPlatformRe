import { GetUserInfoResponse } from "@/features/common/types/user"
import {
  getRefreshAccessToken,
  setRefreshTokenCookies,
  verifyAccessToken,
} from "@/features/common/utils/jwt"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import { cookies } from "next/dist/client/components/headers"

export type UserInfoWithToken = GetUserInfoResponse & {
  refreshToken: string
}

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

        try {
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
          ).then((response) => response.json())

          if (response.status === 401) {
            throw new Error(response.error)
          }

          return response
        } catch (error: any) {
          throw new Error(error.message)
        }
      },
    }),
  ],
  session: {
    maxAge: 15 * 60,
  },
  pages: { signIn: "/signIn" },
  callbacks: {
    // TODO : setRefreshTokenCookies, session callback 동시 실행안됨

    async jwt({ token, user }) {
      if (user) {
        const { accessToken, refreshToken } = user

        if (refreshToken) {
          setRefreshTokenCookies(refreshToken)
        }

        if (accessToken) {
          const accessTokenPayload = verifyAccessToken(accessToken)

          return {
            ...token,
            access_token: accessToken,
            expires_at: accessTokenPayload?.exp,
          }
        }
      }

      if (
        typeof token.expires_at === "number" &&
        Date.now() / 1000 < token.expires_at
      ) {
        return token
      } else {
        const exsistedRefreshToken = cookies().get("auth-token")

        if (exsistedRefreshToken) {
          const { accessToken, refreshToken } = await getRefreshAccessToken(
            exsistedRefreshToken.value
          )

          const accessTokenPayload = verifyAccessToken(accessToken)

          setRefreshTokenCookies(refreshToken)

          return {
            ...token,
            access_token: accessToken,
            expires_at: accessTokenPayload?.exp,
          }
        }
      }

      return token
    },

    async session({ session, token }) {
      session.user.accessToken = token.access_token as string | null | undefined

      return session
    },
  },
})

export { handler as GET, handler as POST }
