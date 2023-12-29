import { verifyJwt } from "@/features/common/utils/jwt"
import { UserInfoWithMile } from "@/features/common/types/user"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  try {
    const response: UserInfoWithMile[] = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const userMile = response[0].mile

    return NextResponse.json(userMile, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 JSON SERVER GET API (Get Mile API) : ${response.data}`)
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Get Mile API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}
