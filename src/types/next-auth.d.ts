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

import { JWT } from "next-auth/jwt"
