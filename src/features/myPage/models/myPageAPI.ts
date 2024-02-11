import { POSTResponse } from "@/features/common/types/fetch"
import { CustomerCounselingDetail } from "../types/myPage"

export const myPageAPI = {
  modificatieMarketingClause: async (
    authorization: string | null | undefined,
    isChecked: boolean
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

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
  },

  memberTermination: async (
    authorization: string | null | undefined
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/memberTermination`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization },
      }
    )

    return response.json()
  },
  writeCoustomerCounseling: async (
    authorization: string | null | undefined,
    writeDetail: CustomerCounselingDetail
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
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
    authorization: string | null | undefined
  ): Promise<CustomerCounselingDetail[] | POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
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
