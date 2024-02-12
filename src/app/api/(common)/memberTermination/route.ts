import { verifyAccessToken } from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const id = verifyAccessToken(accessToken)?.id

  try {
    return NextResponse.json({ status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
