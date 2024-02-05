import { POSTResponse } from "../types/fetch"
import { Product, Products } from "../types/product"

export const productHeartAPI = {
  getHeartList: async (
    authorization: string | null | undefined
  ): Promise<Products | POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

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
  addProductInHeart: async (
    authorization: string | null | undefined,
    productInfo: Product
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

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
  },
  removeProductInHeart: async (
    authorization: string | null | undefined,
    productInfo: Product
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

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
  },
}
