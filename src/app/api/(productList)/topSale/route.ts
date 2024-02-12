import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const pageParam = request.headers.get("pageParam")

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?_sort=discount&_order=desc&_limit=12&_page=${pageParam}`,
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
  } catch (error: unknown) {
    throw error
  }
}
