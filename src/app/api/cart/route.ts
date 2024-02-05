import { GetCartResponse } from "@/features/cart/types/cart"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return new Response(
      JSON.stringify({ status: 401, error: "유효하지 않은 AccessToken입니다." })
    )
  }

  const email = verifyAccessToken(accessToken)?.email

  try {
    const response: GetCartResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const productList = response[0].productList

    return NextResponse.json(productList, { status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
