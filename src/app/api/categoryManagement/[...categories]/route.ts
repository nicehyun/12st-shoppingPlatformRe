import { parseCategoriesObject } from "@/features/categoryManagement/models/category"
import { Products } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string[] } }
) {
  const categoryArr = params.categories

  const { firstCategory, secondCategory, thirdCategory } =
    parseCategoriesObject(categoryArr)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList`,
      {
        next: { revalidate: 10000 },
      }
    ).then((res) => res.json())

    const productList: Products = response

    const filtedProductListWithFirstCategory = productList.filter(
      (product) => product.category1 === firstCategory
    )

    const filtedProductListWithSecondCategory =
      filtedProductListWithFirstCategory.filter(
        (product) => product.category2 === secondCategory
      )

    const filtedProductListWithThirdCategory =
      filtedProductListWithSecondCategory.filter(
        (product) => product.category3 === thirdCategory
      )

    return NextResponse.json(filtedProductListWithThirdCategory, {
      status: 200,
    })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get ProductList - Filted ProductList) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(
        `🚨 Unexpected Error (Get ProductList - Filted ProductList) : ${error}`
      )
    }

    return new NextResponse(null, { status: 500 })
  }
}
