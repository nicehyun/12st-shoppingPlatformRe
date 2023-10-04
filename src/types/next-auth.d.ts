import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    email: string | null | undefined
    accessToken: string | null | undefined
  }
  interface Session {
    user: {
      email: string | null | undefined
      accessToken: string | null | undefined
    }
  }
}
