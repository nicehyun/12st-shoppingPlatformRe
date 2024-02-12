import { ProductsInCart } from "@/features/cart/types/cart"
import { POSTResponse } from "@/features/common/types/fetch"
import { validateAuthorization } from "@/features/common/utils/error"

export const mileAPI = {
  updateMile: async (
    accessToken: string | null | undefined,
    checkoutProductList: ProductsInCart,
    useMile: number
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

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
    } catch (error: unknown) {
      throw error
    }
  },
}
