import { POSTResponse } from "../types/fetch"
import { validateAuthorization } from "../utils/error"

export const mileAPI = {
  getUserMile: async (
    accessToken: string | null | undefined
  ): Promise<POSTResponse | number> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/mile`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
