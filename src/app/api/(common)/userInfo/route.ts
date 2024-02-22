import { verifyAccessToken } from "@/features/common/utils/jwt"
import { parseMaketingClauseFromFormData } from "@/features/myPage/models/formData"
import { validCheckMarketingClaustUpdate } from "@/features/myPage/models/validCheck"
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
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const userInfo = response[0]

    const { password, ...userInfoWithoutPassword } = userInfo

    return NextResponse.json(userInfoWithoutPassword, { status: 200 })
  } catch (error: unknown) {
    throw error
  }
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const formData = await request.formData()

  const { valid, message } = validCheckMarketingClaustUpdate(formData)

  if (!valid) {
    return NextResponse.json({
      status: 401,
      error: message,
    })
  }

  const id = verifyAccessToken(accessToken)?.id

  const { isCheckedMarketingClause } = parseMaketingClauseFromFormData(formData)

  try {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marketingClause: isCheckedMarketingClause,
      }),
    })

    return NextResponse.json({ status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
