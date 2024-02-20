import {
  CheckoutClauseCheck,
  CheckoutList,
} from "@/features/checkout/types/checkout"
import { AmountCoupon, RateCoupon } from "@/features/common/types/coupon"
import { POSTResponse } from "@/features/common/types/fetch"
import { Product, Products } from "@/features/common/types/product"
import { validateAuthorization } from "@/features/common/utils/error"
import { FormEvent } from "react"

export const checkoutAPI = {
  getCheckoutList: async (
    accessToken: string | null | undefined
  ): Promise<CheckoutList | POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

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
    } catch (error: unknown) {
      throw error
    }
  },
  checkout: async (
    accessToken: string | null | undefined,
    formData: FormData
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
        {
          method: "POST",
          headers: {
            authorization,
          },

          body: formData,
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
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
    } catch (error: unknown) {
      throw error
    }
  },
}
