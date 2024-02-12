import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import { POSTResponse } from "../types/fetch"
import { validateAuthorization } from "../utils/error"

export const deliveryInfoAPI = {
  getDeliveryInfo: async (
    accessToken: string | null | undefined
  ): Promise<DeliveryInfo | null | POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/deliveryInfo`,
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
  updateDeliveryInfo: async (
    accessToken: string | null | undefined,
    updateDeliveryInfo: DeliveryInfo
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/deliveryInfo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          body: JSON.stringify({ updateDeliveryInfo }),
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
