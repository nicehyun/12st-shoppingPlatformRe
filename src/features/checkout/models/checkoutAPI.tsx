import { CheckoutList } from "@/features/checkout/types/checkout"
import { Product } from "@/features/common/types/product"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"

export const checkoutAPI = {
  getCheckoutList: async (
    authorization: string | null | undefined
  ): Promise<CheckoutList | null> => {
    if (!authorization) return null

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
  checkout: async (
    checkoutInfo: CheckoutList,
    isClauseCheck: Omit<CheckoutClauseCheck, "all">,
    isUpdateDeliveryInfo: boolean,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          body: JSON.stringify({
            checkoutInfo,
            isClauseCheck,
            isUpdateDeliveryInfo,
          }),
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },

  checkoutProductSellCountIncrease: async (productInfo: Product) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productInfo,
          }),
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
