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
  /**
   * JWT 토큰의 구조를 확장
   */
  interface JWT {
    // 기존 필드 외에 추가하고자 하는 필드들을 선언
    email?: string
    id?: number
    expires_at: number
  }
}
