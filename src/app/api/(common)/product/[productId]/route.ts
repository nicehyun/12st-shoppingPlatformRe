import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId

  if (!productId) {
    return NextResponse.json({
      status: 401,
      error: "상품번호가 필요합니다.",
    })
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList/${productId}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    if (Object.keys(response).length === 0) {
      return NextResponse.json({
        status: 401,
        error: "상품번호와 일치하는 상품이 존재하지 않습니다.",
      })
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
