import { Product } from "@/features/common/types/product"
import { ProductInCart, ProductsInCart } from "@/features/cart/types/cart"
import { POSTResponse } from "@/features/common/types/fetch"

type CartAPIResponse = POSTResponse | ProductsInCart

export const cartAPI = {
  getProductListInCart: async (
    authorization: string | null | undefined
  ): Promise<CartAPIResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
        {
          headers: { authorization },
          next: { revalidate: 0 },
        }
      )

      return response.json()
    } catch (error: any) {
      throw new Error(error)
    }
  },
  addProductInCart: async (
    productInfo: Product,
    authorization: string | null | undefined
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    try {
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
    } catch (error: any) {
      throw new Error(error)
    }
  },

  increaseProductInCart: async (
    productInfo: ProductInCart,
    authorization: string | null | undefined
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    if (productInfo.amount >= 50)
      return {
        status: 401,
        error: "최대 구매 가능 수량에 도달했습니다.",
      }

    try {
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
    } catch (error: any) {
      throw new Error(error)
    }
  },

  decreaseProductInCart: async (
    productInfo: ProductInCart,
    authorization: string | null | undefined
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    if (productInfo.amount <= 1)
      return {
        status: 401,
        error:
          "최소 구매 가능 수량에 도달했습니다. 상품을 장바구니에서 제거하려면, 삭제 옵션을 사용해주세요.",
      }

    try {
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
    } catch (error: any) {
      throw new Error(error)
    }
  },

  removeProductInCart: async (
    productInfo: Product | null,
    authorization: string | null | undefined
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    if (!productInfo)
      return {
        status: 401,
        error: "상품 정보가 필요합니다.",
      }

    try {
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
    } catch (error: any) {
      throw new Error(error)
    }
  },

  removeCheckedProductListInCart: async (
    checkedProductList: ProductsInCart,
    authorization: string | null | undefined
  ): Promise<POSTResponse> => {
    if (!authorization)
      return {
        status: 401,
        error: "유효하지 않은 AccessToken입니다.",
      }

    if (checkedProductList.length === 0) {
      return {
        status: 401,
        error:
          "체크된 상품이 없습니다. 삭제를 원하는 상품을 먼저 선택해주세요.",
      }
    }

    try {
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
    } catch (error: any) {
      throw new Error(error)
    }
  },
}
