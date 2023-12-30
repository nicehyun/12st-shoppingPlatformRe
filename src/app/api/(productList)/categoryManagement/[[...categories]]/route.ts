import { Products } from "@/features/common/types/product"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string[] } }
) {
  console.log(params.categories)
  try {
    const response: Products = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=sellCount&_order=desc`,
      {
        next: { revalidate: false },
      }
    ).then((res) => res.json())

    if (!params.categories) {
      return NextResponse.json(response, {
        status: 200,
      })
    } else {
      const [firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
        params.categories

      const firstCategory = getAfterEquals(firstCategoryPath)
      const secondCategory = getAfterEquals(secondCategoryPath)
      const thirdCategory = getAfterEquals(thirdCategoryPath)

      const filtedProductListWithFirstCategory = response.filter(
        (product) =>
          typeof product.category1 === "string" &&
          product.category1.includes(firstCategory)
      )

      const filtedProductListWithSecondCategory =
        filtedProductListWithFirstCategory.filter(
          (product) =>
            typeof product.category2 === "string" &&
            product.category2.includes(parseSliceToAnd(secondCategory))
        )

      const filtedProductListWithThirdCategory =
        filtedProductListWithSecondCategory.filter(
          (product) =>
            typeof product.category3 === "string" &&
            product.category3.includes(parseSliceToAnd(thirdCategory))
        )

      if (thirdCategory.length === 0) {
        return NextResponse.json(filtedProductListWithSecondCategory, {
          status: 200,
        })
      } else {
        return NextResponse.json(filtedProductListWithThirdCategory, {
          status: 200,
        })
      }
    }
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
