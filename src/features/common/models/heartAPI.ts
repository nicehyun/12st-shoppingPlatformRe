import { GetHeartListResponse } from "../types/heart"
import { Product } from "../types/product"

export const productHeartAPI = {
  getHeartList: async (
    authorization: string | null | undefined
  ): Promise<GetHeartListResponse | null> => {
    if (!authorization) return null

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/heart`,
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
  heartOfProduct: async (
    productInfo: Product,
    direction: "add" | "remove",
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/heart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({ productInfo, direction }),
      }
    )

    return response.json()
  },
}
