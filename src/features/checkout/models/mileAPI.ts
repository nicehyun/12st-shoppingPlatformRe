import { ProductsInCart } from "@/features/cart/types/cart"
import { POSTResponse } from "@/features/common/types/fetch"

export const mileAPI = {
  updateMile: async (
    authorization: string | null | undefined,
    checkoutProductList: ProductsInCart,
    useMile: number
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/mile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          body: JSON.stringify({
            checkoutProductList,
            useMile,
          }),
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
