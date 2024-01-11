import { IRequestSignUp } from "../types/signUp"

export const signUpAPI = {
  signUp: async (props: IRequestSignUp) => {
    try {
      const response = await fetch(`/api/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props),
      })

      return response.json()
    } catch (error: any) {
      throw new Error(error)
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
    } catch (error: any) {
      throw new Error(error)
    }
  },
  requestPhoneVerification: async (
    phone: string,
    isRequestCode: boolean = false
  ) => {
    try {
      const response = await fetch(
        `/api/auth/signUp/verificatePhone/requestPhoneVerification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone, isRequestCode }),
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
