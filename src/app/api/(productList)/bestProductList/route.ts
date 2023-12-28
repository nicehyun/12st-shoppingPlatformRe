import { Products } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const response: Products = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=sellCount&_order=desc`,
      {
        next: { revalidate: 10000 },
      }
    ).then((res) => res.json())

    const sortedProductList = response.slice(0, 100)

    return NextResponse.json(sortedProductList, {
      status: 200,
    })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get whole ProductList - Filted ProductList) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(
        `🚨 Unexpected Error (Get whole ProductList - Filted ProductList) : ${error}`
      )
    }

    return new NextResponse(null, { status: 500 })
  }
}
