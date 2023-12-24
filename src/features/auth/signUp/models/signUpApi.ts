import { IRequestSignUp } from "../types/signUp"

export const signUpAPI = {
  signUp: async (props: IRequestSignUp) => {
    const response = await fetch(`/api/auth/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
      next: { revalidate: 0 },
    })

    return response.json()
  },
  emailDuplicateCheck: async (email: string) => {
    const response = await fetch(`/api/auth/signUp/emailDuplicateCheck`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
      next: { revalidate: 0 },
    })

    return response.json()
  },
  requestPhoneVerification: async (
    phone: string,
    isRequestCode: boolean = false
  ) => {
    const response = await fetch(
      `/api/auth/signUp/verificatePhone/requestPhoneVerification`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, isRequestCode }),
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
}
