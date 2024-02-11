import { POSTResponse } from "../types/fetch"
import { UserInfoWithMile } from "../types/user"

export const userInfoAPI = {
  getUserInfo: async (
    authorization: string | null | undefined
  ): Promise<UserInfoWithMile | POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/userInfo`,
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
