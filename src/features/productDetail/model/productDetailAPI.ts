import { POSTResponse } from "@/features/common/types/fetch"
import { Product } from "@/features/common/types/product"

export const productDeatilAPI = {
  getProductInfo: async (
    productId: string
  ): Promise<POSTResponse | Product> => {
    if (!productId)
      return {
        status: 401,
        error: "상품번호가 필요합니다.",
      }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`,
        {
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
