import { DeliveryInfo } from "@/features/common/types/address"

export const addressAPI = {
  getDeliveryInfo: async (authorization: string | null | undefined) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/deliveryInfo`,
      {
        headers: { authorization },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
  updateDeliveryInfo: async (
    updateDeliveryInfo: DeliveryInfo,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

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
  },
}
