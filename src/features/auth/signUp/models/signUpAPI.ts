import { POSTResponse } from "@/features/common/types/fetch"

export const signUpAPI = {
  signUp: async (formData: FormData): Promise<POSTResponse> => {
    try {
      const response = await fetch(`/api/auth/signUp`, {
        method: "POST",
        body: formData,
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
