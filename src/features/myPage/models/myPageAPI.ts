import { POSTResponse } from "@/features/common/types/fetch"
import { CustomerCounselingDetail } from "../types/myPage"
import { validateAuthorization } from "@/features/common/utils/error"

export const myPageAPI = {
  modificatieMarketingClause: async (
    accessToken: string | null | undefined,
    isChecked: boolean
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/userInfo`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", authorization },
          body: JSON.stringify({
            isChecked,
          }),
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },

  memberTermination: async (
    accessToken: string | null | undefined
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/memberTermination`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", authorization },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
  writeCoustomerCounseling: async (
    accessToken: string | null | undefined,
    writeDetail: CustomerCounselingDetail
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/myPage/customerCounseling`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", authorization },
          body: JSON.stringify({
            writeDetail,
          }),
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
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
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
