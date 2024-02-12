import { Product } from "@/features/common/types/product"
import { verifyAccessToken } from "@/features/common/utils/jwt"
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

  if (!productInfo) {
    return NextResponse.json({
      status: 401,
      error: "상품 정보가 필요합니다.",
    })
  }

  const email = verifyAccessToken(accessToken)?.email
  const id = verifyAccessToken(accessToken)?.id

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/heart?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const prevProductList = response[0]

    if (prevProductList === undefined) {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/heart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          productList: [productInfo],
          email,
        }),
      })
    } else {
      const isExistedProduct = prevProductList.productList.find(
        (prevProduct: Product) => prevProduct.id === productInfo.id
      )

      if (isExistedProduct) {
        return NextResponse.json({
          status: 409,
          error: "이미 HEART 리스트에 있는 상품입니다.",
        })
      }

      const updateProductList = [productInfo, ...prevProductList.productList]

      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/heart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productList: updateProductList,
        }),
      })
    }

    return NextResponse.json({ status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
