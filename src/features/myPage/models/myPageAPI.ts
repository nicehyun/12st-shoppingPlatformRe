import { POSTResponse } from "@/features/common/types/fetch"
import { CustomerCounselingDetail } from "../types/myPage"
import { validateAuthorization } from "@/features/common/utils/error"

export const myPageAPI = {
  modificatieMarketingClause: async (
    accessToken: string | null | undefined,
    formData: FormData
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/userInfo`,
        {
          method: "POST",
          headers: { authorization },
          body: formData,
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },

  memberTermination: async (
    accessToken: string | null | undefined
  ): Promise<POSTResponse> => {
    try {
      console.log("실행")
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/myPage/memberTermination`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", authorization },
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
  writeCoustomerCounseling: async (
    accessToken: string | null | undefined,
    formData: FormData
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/myPage/customerCounseling`,
        {
          method: "POST",
          headers: { authorization },
          body: formData,
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
  getCoutomerCounselingList: async (
    accessToken: string | null | undefined
  ): Promise<CustomerCounselingDetail[] | POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/myPage/customerCounseling`,
        {
          headers: { authorization },
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
