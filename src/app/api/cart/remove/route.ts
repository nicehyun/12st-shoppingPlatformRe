import { GetCartResponse, ProductInCart } from "@/features/cart/types/cart"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

interface RequestBody {
  productInfo: ProductInCart
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")
  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const id = verifyAccessToken(accessToken)?.id

  const body: RequestBody = await request.json()

  const productInfo = body.productInfo

  if (!productInfo) {
    return NextResponse.json({
      status: 401,
      error: "상품 정보가 필요합니다.",
    })
  }

  try {
    const response: GetCartResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?id=${id}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const prevProductListInCart = response[0].productList

    const removedProductList = prevProductListInCart.filter(
      (prevProductList) => prevProductList.id !== productInfo.id
    )

    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productList: removedProductList,
      }),
    })

    return NextResponse.json({
      status: 200,
    })
  } catch (error: unknown) {
    throw error
  }
}
