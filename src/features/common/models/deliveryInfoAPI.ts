import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import { POSTResponse } from "../types/fetch"

export const deliveryInfoAPI = {
  getDeliveryInfo: async (
    authorization: string | null | undefined
  ): Promise<DeliveryInfo | undefined | POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/deliveryInfo`,
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
  updateDeliveryInfo: async (
    authorization: string | null | undefined,
    updateDeliveryInfo: DeliveryInfo
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
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
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
