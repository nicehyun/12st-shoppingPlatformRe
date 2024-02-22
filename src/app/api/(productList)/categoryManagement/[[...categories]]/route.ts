import { decodeCategoryPaths } from "@/features/common/models/segment"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { categories: string[] } }
) {
  const pageParam = request.headers.get("pageParam")

  const { firstCategory, secondCategory, thirdCategory } = decodeCategoryPaths({
    categories: params.categories ?? [],
  })

  try {
    if (thirdCategory) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${firstCategory}&category2=${secondCategory}&category3=${thirdCategory}&_limit=12&_page=${pageParam}`,
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

    if (secondCategory) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?category1=${firstCategory}&category2=${secondCategory}&_limit=12&_page=${pageParam}`,
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

    if (!firstCategory) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList?_limit=12&_page=${pageParam}`,
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
