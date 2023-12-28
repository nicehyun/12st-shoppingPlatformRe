import { Products } from "@/features/common/types/product"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string[] } }
) {
  try {
    const response: Products = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=sellCount&_order=desc`,
      {
        next: { revalidate: 10000 },
      }
    ).then((res) => res.json())

    if (!params.categories) {
      return NextResponse.json(response, {
        status: 200,
      })
    } else {
      const [, secondCategoryPath, thirdCategoryPath] = params.categories

      const secondCategory = getAfterEquals(secondCategoryPath)
      const thirdCategory = getAfterEquals(thirdCategoryPath)

      if (thirdCategory.length === 0) {
        const filtedProductListWithSecondCategory = response.filter(
          (product) =>
            typeof product.category1 === "string" &&
            product.category2.includes(parseSliceToAnd(secondCategory))
        )
        return NextResponse.json(filtedProductListWithSecondCategory, {
          status: 200,
        })
      } else {
        const filtedProductListWithThirdCategory = response.filter(
          (product) =>
            typeof product.category1 === "string" &&
            product.category3.includes(parseSliceToAnd(thirdCategory))
        )
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
