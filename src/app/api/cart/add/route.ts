import { GetCartResponse } from "@/features/cart/types/cart"
import { Product } from "@/features/common/types/product"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import {
  validCheckAddProductToCart,
  validCheckProductInfo,
} from "@/features/cart/models/validateCheck"
import { NextResponse } from "next/server"

interface RequestBody {
  productInfo: Product
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")
  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const body: RequestBody = await request.json()

  const productInfo = body.productInfo

  const { valid, message } = validCheckProductInfo(productInfo)

  if (!valid) {
    return NextResponse.json({
      status: 401,
      error: message,
    })
  }

  const email = verifyAccessToken(accessToken)?.email
  const id = verifyAccessToken(accessToken)?.id

  try {
    const productInfoInCart = { ...productInfo, amount: 1 }

    const response: GetCartResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const { valid, message } = validCheckAddProductToCart(
      productInfo,
      response[0].productList
    )

    if (!valid) {
      return NextResponse.json({
        status: 401,
        error: message,
      })
    }

    if (response.length === 0) {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          id,
          productList: [productInfoInCart],
        }),
      })
    } else {
      const prevProductListInCart = response[0].productList

      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productList: [productInfoInCart, ...prevProductListInCart],
        }),
      })
    }

    return NextResponse.json({
      status: 200,
    })
  } catch (error: unknown) {
    throw error
  }
}
