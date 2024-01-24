import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

interface RequestBody {
  refreshToken: string
}

export async function POST(request: Request, response: Response) {
  const body: RequestBody = await request.json()

  try {
    const { refreshToken } = body

    if (!refreshToken) {
      return NextResponse.json(
        { message: "Refresh token is required" },
        { status: 400 }
      )
    }

    const decoded = verifyRefreshToken(refreshToken)
    const email = decoded?.email
    const id = decoded?.id

    const newAccessToken = generateAccessToken({
      email,
      id,
    })

    const newRefreshToken = generateRefreshToken({
      email,
      id,
    })

    return NextResponse.json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    })
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    )
  }
}
