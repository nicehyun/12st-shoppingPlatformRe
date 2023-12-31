import { GetHeartListResponse } from "../types/heart"
import { Product } from "../types/product"

export const productHeartAPI = {
  getHeartList: async (
    authorization: string | null | undefined
  ): Promise<GetHeartListResponse | null> => {
    if (!authorization) return null

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/heart`, {
      headers: {
        "Content-Type": "application/json",
        authorization,
      },
      next: { revalidate: 0 },
    })

    return response.json()
  },
  heartOfProduct: async (
    productInfo: Product,
    direction: "add" | "remove",
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/heart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization,
      },
      body: JSON.stringify({ productInfo, direction }),
    })

    return response.json()
  },
}
