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
    if (productInfo.amount <= 1)
      return {
        status: 401,
        error:
          "최소 구매 가능 수량에 도달했습니다. 상품을 장바구니에서 제거하려면, 삭제 옵션을 사용해주세요.",
      }

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
    if (!productInfo)
      return {
        status: 401,
        error: "상품 정보가 필요합니다.",
      }

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
    if (checkedProductList.length === 0) {
      return {
        status: 401,
        error:
          "체크된 상품이 없습니다. 삭제를 원하는 상품을 먼저 선택해주세요.",
      }
    }

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
