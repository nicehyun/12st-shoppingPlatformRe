import { setRefreshTokenCookies } from "@/features/common/utils/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    setRefreshTokenCookies("")

    return NextResponse.json(null, { status: 200 })
  } catch (error) {
    return NextResponse.json(null, { status: 500 })
  }
}
