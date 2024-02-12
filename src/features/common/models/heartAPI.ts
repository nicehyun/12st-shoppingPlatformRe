import { POSTResponse } from "../types/fetch"
import { Product, Products } from "../types/product"
import { validateAuthorization } from "../utils/error"

export const productHeartAPI = {
  getHeartList: async (
    accessToken: string | null | undefined
  ): Promise<Products | POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

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
    } catch (error: unknown) {
      throw error
    }
  },
  addProductInHeart: async (
    accessToken: string | null | undefined,
    productInfo: Product
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/heart/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          body: JSON.stringify({ productInfo }),
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
  removeProductInHeart: async (
    accessToken: string | null | undefined,
    productInfo: Product
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/heart/remove`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          body: JSON.stringify({ productInfo }),
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
