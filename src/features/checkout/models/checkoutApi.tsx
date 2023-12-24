import { CheckoutList } from "@/features/checkout/types/checkout"
import { Product } from "@/features/common/types/product"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"
import { NextResponse } from "next/server"

export const checkoutAPI = {
  getCheckoutList: async (
    authorization: string | null | undefined
  ): Promise<CheckoutList | null> => {
    if (!authorization) return null

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
  },
  checkout: async (
    checkoutInfo: CheckoutList,
    isClauseCheck: Omit<CheckoutClauseCheck, "all">,
    isUpdateDeliveryInfo: boolean,
    authorization: string | null | undefined
  ): Promise<NextResponse | null> => {
    if (!authorization) return null

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
  },

  checkoutProductSellCountIncrease: async (productInfo: Product) => {
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
  },
}
