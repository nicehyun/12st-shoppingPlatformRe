import { verifyAccessToken } from "@/features/common/utils/jwt"
import { UserInfoWithMile } from "@/features/common/types/user"
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
    const response: UserInfoWithMile[] = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const userMile = response[0].mile

    return NextResponse.json(userMile, { status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
