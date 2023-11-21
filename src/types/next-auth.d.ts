declare module "next-auth" {
  interface User {
<<<<<<< HEAD
=======
    name: string | null | undefined
>>>>>>> 120e7d35f4b4673d70b178580e9b977497e227e3
    email: string | null | undefined
    accessToken: string | null | undefined
  }
  interface Session {
<<<<<<< HEAD
    user: {
      email: string | null | undefined
      accessToken: string | null | undefined
    }
=======
    user: User
>>>>>>> 120e7d35f4b4673d70b178580e9b977497e227e3
  }
}

import { JWT } from "next-auth/jwt"
