import { Product } from "@/features/common/types/product"

export const productDeatilAPI = {
  getProductInfo: async (productId: string): Promise<Product | null> => {
    if (!productId) return null

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`,
        {
          next: { revalidate: false },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
