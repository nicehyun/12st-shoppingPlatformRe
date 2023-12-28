import { Products } from "@/features/common/types/product"
import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string[] } }
) {
  let productList: Products | undefined

  const [firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    params.categories[0].split(",")

  const firstCategory = getAfterEquals(firstCategoryPath)
  const secondCategory = parseSliceToAnd(getAfterEquals(secondCategoryPath))
  const thirdCategory = parseSliceToAnd(getAfterEquals(thirdCategoryPath))

  try {
    const response: Products = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=sellCount&_order=desc`,
      {
        next: { revalidate: 10000 },
      }
    ).then((res) => res.json())

    productList = response
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

  const filtedProductListWithSecondCategory = productList.filter(
    (product) => product.category2 === secondCategory
  )

  const filtedProductListWithThirdCategory =
    filtedProductListWithSecondCategory.filter(
      (product) => product.category3 === thirdCategory
    )

  if (thirdCategory) {
    const ProductList = filtedProductListWithThirdCategory.slice(0, 100)

    return NextResponse.json(ProductList, {
      status: 200,
    })
  } else {
    const ProductList = filtedProductListWithSecondCategory.slice(0, 100)

    return NextResponse.json(ProductList, {
      status: 200,
    })
  }
}
