import { Products } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const response: Products = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=sellCount&_order=desc`,
      {
        next: { revalidate: 60 * 60 * 1000 },
      }
    ).then((res) => res.json())

    const sortedProductList = response.slice(0, 100)

    return NextResponse.json(sortedProductList, {
      status: 200,
    })
  } catch (error: any) {
    throw new Error(error)
  }
}
