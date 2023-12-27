declare module "next-auth" {
  interface User {
    id: number
    name: string | null | undefined
    email: string | null | undefined
    accessToken: string | null | undefined
  }
  interface Session {
    user: User
  }
}

import { JWT } from "next-auth/jwt"
