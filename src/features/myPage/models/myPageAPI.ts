import {
  CustomerCounselingDetail,
  GetCustomerCounselingDetailResponse,
} from "../types/myPage"

export const myPageAPI = {
  modificatieMarketingClause: async (
    isChecked: boolean,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/userInfo`, {
      method: "POST",
      headers: { "Content-Type": "application/json", authorization },
      body: JSON.stringify({
        isChecked,
      }),
    })

    return response.json()
  },
  memberTermination: async (authorization: string | null | undefined) => {},
  writeCoustomerCounseling: async (
    writeDetail: CustomerCounselingDetail,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/myPage/customerCounseling`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization },
        body: JSON.stringify({
          writeDetail,
        }),
      }
    )

    return response.json()
  },
  getCoutomerCounselingList: async (
    authorization: string | null | undefined
  ): Promise<GetCustomerCounselingDetailResponse | null> => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/myPage/customerCounseling`,
      {
        headers: { authorization },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
}
