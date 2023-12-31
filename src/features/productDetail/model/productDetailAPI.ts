import { Product } from "@/features/common/types/product"

export const productDeatilAPI = {
  getProductInfo: async (productId: string): Promise<Product | null> => {
    if (!productId) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/${productId}`,
      {
        next: { revalidate: 300 },
      }
    )

    return response.json()
  },
}
