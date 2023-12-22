import { Product } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

interface RequestBody {
  productInfo: Product
}

export async function POST(request: NextRequest) {
  const { productInfo }: RequestBody = await request.json()

  try {
    if (!productInfo || !productInfo.id) {
      throw new Error(`🚨 Not ProductInfo!`)
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
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER POST API (Add Product Sell Count API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(
        `🚨 Unexpected Error (Add Product Sell Count API) : ${error}`
      )
    }

    return new NextResponse(null, { status: 500 })
  }
}
