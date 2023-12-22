import { GetUserInfoResponse } from "../types/user"

export const userInfoAPI = {
  getUserInfo: async (
    authorization: string | null | undefined
  ): Promise<GetUserInfoResponse | null> => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/userInfo`,
      {
        headers: { authorization },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
}
