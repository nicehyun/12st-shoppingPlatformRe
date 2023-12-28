import { Products } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { searchPrams: string } }
) {
  const searchParams = params.searchPrams[0]

  try {
    const response: Products = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=sellCount&_order=desc`,
      {
        next: { revalidate: 10000 },
      }
    ).then((res) => res.json())

    const filteredProductsMatchingName = response.filter((product) =>
      Object.values(product).some(
        (value) => typeof value === "string" && value.includes(searchParams)
      )
    )

    const filteredProductsMatchingBrand = response.filter(
      (product) =>
        typeof product.brand === "string" &&
        product.brand.includes(searchParams)
    )

    return NextResponse.json(
      { filteredProductsMatchingName, filteredProductsMatchingBrand },
      {
        status: 200,
      }
    )
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get Search ProductList - Filted ProductList) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(
        `🚨 Unexpected Error (Get Search ProductList - Filted ProductList) : ${error}`
      )
    }

    return new NextResponse(null, { status: 500 })
  }
}
