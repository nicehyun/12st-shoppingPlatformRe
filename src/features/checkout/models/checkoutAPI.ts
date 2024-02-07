import {
  CheckoutClauseCheck,
  CheckoutList,
} from "@/features/checkout/types/checkout"
import { POSTResponse } from "@/features/common/types/fetch"
import { Product } from "@/features/common/types/product"

export const checkoutAPI = {
  getCheckoutList: async (
    authorization: string | null | undefined
  ): Promise<CheckoutList | POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

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
    authorization: string | null | undefined,
    checkoutInfo: CheckoutList,
    isClauseCheck: Omit<CheckoutClauseCheck, "all">
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

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
