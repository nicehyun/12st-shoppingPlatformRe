import { ISignUpRequest } from "../types/signUp"

export const signUpAPI = {
  signUp: async (signUpProps: ISignUpRequest) => {
    try {
      const response = await fetch(`/api/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpProps),
      })

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
  emailDuplicateCheck: async (email: string) => {
    try {
      const response = await fetch(`/api/auth/signUp/emailDuplicateCheck`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
