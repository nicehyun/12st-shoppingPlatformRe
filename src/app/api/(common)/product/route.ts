import { Product } from "@/features/common/types/product"
import { NextRequest, NextResponse } from "next/server"

interface RequestBody {
  productInfo: Product
}

export async function POST(request: NextRequest) {
  const { productInfo }: RequestBody = await request.json()

  try {
    if (!productInfo || !productInfo.id) {
      return NextResponse.json({
        status: 401,
        error: "상품번호가 필요합니다.",
      })
    }
    const productInfoResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList/${productInfo.id}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList/${productInfoResponse.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sellCount: productInfoResponse.sellCount + 1,
        }),
      }
    )

    return NextResponse.json({ status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
