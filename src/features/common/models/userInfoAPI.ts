import { POSTResponse } from "../types/fetch"
import { UserInfoWithMile } from "../types/user"
import { validateAuthorization } from "../utils/error"

export const userInfoAPI = {
  getUserInfo: async (
    accessToken: string | null | undefined
  ): Promise<UserInfoWithMile | POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/userInfo`,
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
