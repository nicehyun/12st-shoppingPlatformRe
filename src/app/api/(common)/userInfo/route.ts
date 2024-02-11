import { verifyAccessToken } from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

interface RequestBody {
  isChecked: boolean
}

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
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const userInfo = response[0]

    const { password, ...userInfoWithoutPassword } = userInfo

    return NextResponse.json(userInfoWithoutPassword, { status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const id = verifyAccessToken(accessToken)?.id

  const isMarketingClause = body.isChecked

  try {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marketingClause: isMarketingClause,
      }),
    })

    return NextResponse.json({ status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
