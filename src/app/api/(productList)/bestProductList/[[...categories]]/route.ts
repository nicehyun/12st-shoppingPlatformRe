import { parseSliceToAnd } from "@/features/common/utils/text"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string } }
) {
  const pageParam = request.headers.get("pageParam")

  const [firstCategory, secondCategory, thirdCategory] = params.categories

  const parsedFirstCategory = parseSliceToAnd(firstCategory)
  const parsedSecondCategory = parseSliceToAnd(secondCategory)
  const parsedThirdCategory = parseSliceToAnd(thirdCategory)

  try {
    if (parsedThirdCategory !== "undefined") {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${parsedFirstCategory}&category2=${parsedSecondCategory}&category3=${parsedThirdCategory}&_sort=sellCount&_order=desc&_limit=12&_page=${pageParam}`,
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

    if (parsedSecondCategory !== "undefined") {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${parsedFirstCategory}&category2=${parsedSecondCategory}&_sort=sellCount&_order=desc&_limit=12&_page=${pageParam}`,
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

    if (parsedFirstCategory !== "undefined") {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${parsedFirstCategory}&_sort=sellCount&_order=desc&_limit=12&_page=${pageParam}`,
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

    if (parsedFirstCategory === "undefined") {
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
  } catch (error: unknown) {
    throw error
  }
}
