import { Product } from "@/features/common/types/product"
import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import { POSTResponse } from "@/features/common/types/fetch"
import { validateAuthorization } from "@/features/common/utils/error"

type CartAPIResponse = POSTResponse | ProductsInCart

export const cartAPI = {
  getProductListInCart: async (
    accessToken: string | null | undefined
  ): Promise<CartAPIResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
        {
          headers: { authorization },
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
  addProductInCart: async (
    productInfo: Product,
    accessToken: string | null | undefined
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/add`,
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

  increaseProductInCart: async (
    productInfo: ProductInCart,
    accessToken: string | null | undefined
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/increase`,
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

  decreaseProductInCart: async (
    productInfo: ProductInCart,
    accessToken: string | null | undefined
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/decrease`,
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

  removeProductInCart: async (
    productInfo: Product | null,
    accessToken: string | null | undefined
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/remove`,
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

  removeCheckedProductListInCart: async (
    checkedProductList: ProductsInCart,
    accessToken: string | null | undefined
  ): Promise<POSTResponse> => {
    try {
      const { authorization } = validateAuthorization(accessToken)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/checkedRemove`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization,
          },
          body: JSON.stringify({
            checkedProductList,
            direction: "remove_checked",
          }),
        }
      )

      return response.json()
    } catch (error: unknown) {
      throw error
    }
  },
}
