import { Product } from "@/features/common/types/product"
import {
  GetCartResponse,
  ProductInCart,
  ProductsInCart,
} from "@/features/cart/types/cart"

export const cartAPI = {
  getProductListInCart: async (
    authorization: string | null | undefined
  ): Promise<GetCartResponse | null> => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        headers: { authorization },
        next: { revalidate: 0 },
      }
    )

    return response.json()
  },
  addProductToCart: async (
    productInfo: Product,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({ productInfo, direction: "add" }),
      }
    )

    return response.json()
  },
  increaseProductToCart: async (
    productInCartInfo: ProductInCart,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({ productInCartInfo, direction: "increase" }),
      }
    )

    return response.json()
  },
  removeProductFromCart: async (
    productInfo: Product,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({ productInfo, direction: "remove" }),
      }
    )

    return response.json()
  },
  decreaseProductToCart: async (
    productInCartInfo: ProductInCart,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization,
        },
        body: JSON.stringify({ productInCartInfo, direction: "decrease" }),
      }
    )

    return response.json()
  },
  removeCheckedProductsFromCart: async (
    checkedProductList: ProductsInCart,
    authorization: string | null | undefined
  ) => {
    if (!authorization) return null

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
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
  },
}
