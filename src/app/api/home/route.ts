import {
  getBestProductList,
  getRandomArrivalProductList,
  getTopSaleProductList,
} from "@/features/common/models/product"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList`,
      {
        next: { revalidate: 10000 },
      }
    ).then((res) => res.json())

    const bestProductList = getBestProductList(response ?? [])
    const arrivalProductList = getRandomArrivalProductList(response ?? [])
    const topSaleProductList = getTopSaleProductList(response ?? [])

    return NextResponse.json(
      { bestProductList, arrivalProductList, topSaleProductList },
      { status: 200 }
    )
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get Individual Section ProductList) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(
        `🚨 Unexpected Error (Get Individual Section ProductList) : ${error}`
      )
    }

    return new NextResponse(null, { status: 500 })
  }
}
