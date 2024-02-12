import { JWT } from "next-auth/jwt"
import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id: number
    name: string | null | undefined
    email: string | null | undefined
    accessToken: string | null | undefined
    refreshToken: string | null | undefined
  }
  interface Session {
    user: User
  }
}

declare module "next-auth" {
  interface JWT {
    email?: string
    id?: number
    expires_at: number
  }
}
