import { verifyAccessToken } from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const email = verifyAccessToken(accessToken)?.email

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/heart?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    if (response[0]) {
      return NextResponse.json(response[0].productList, { status: 200 })
    } else {
      return NextResponse.json([], { status: 200 })
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
