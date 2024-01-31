import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { searchParams: string } }
) {
  const pageParam = request.headers.get("pageParam")
  const [searchParams] = params.searchParams

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList?name_like=${searchParams}&_sort=sellCount&_order=desc&_limit=12&_page=${pageParam}`,
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
  } catch (error: any) {
    throw new Error(error)
  }
}
