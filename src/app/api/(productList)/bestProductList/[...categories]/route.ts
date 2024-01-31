import { getAfterEquals, parseSliceToAnd } from "@/features/common/utils/text"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string[] } }
) {
  const pageParam = request.headers.get("pageParam")

  const [, firstCategoryPath, secondCategoryPath, thirdCategoryPath] =
    params.categories

  const firstCategory = getAfterEquals(firstCategoryPath)
  const secondCategory = parseSliceToAnd(getAfterEquals(secondCategoryPath))
  const thirdCategory = parseSliceToAnd(getAfterEquals(thirdCategoryPath))

  try {
    if (!firstCategory) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=sellCount&_order=desc&_limit=12&_page=${pageParam}`,
        {
          next: { revalidate: 0 },
        }
      )

      const totalCount = response.headers.get("X-Total-Count")

      const productList = await response.json()

      const result = { productList, totalCount }

      return NextResponse.json(result, {
        status: 200,
      })
    }

    if (secondCategory && !thirdCategory) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${firstCategory}&category2=${secondCategory}&_sort=sellCount&_order=desc&_limit=12&_page=${pageParam}`,
        {
          next: { revalidate: 0 },
        }
      )

      const totalCount = response.headers.get("X-Total-Count")

      const productList = await response.json()

      const result = { productList, totalCount }

      return NextResponse.json(result, {
        status: 200,
      })
    }

    if (secondCategory && thirdCategory) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${firstCategory}&category2=${secondCategory}&category3=${thirdCategory}&_sort=sellCount&_order=desc&_limit=12&_page=${pageParam}`,
        {
          next: { revalidate: 0 },
        }
      )

      const totalCount = response.headers.get("X-Total-Count")

      const productList = await response.json()

      const result = { productList, totalCount }

      return NextResponse.json(result, {
        status: 200,
      })
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
