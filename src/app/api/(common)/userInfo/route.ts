import { verifyJwt } from "@/features/common/utils/jwt"
import { GetUserInfoResponse } from "@/features/common/types/user"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

interface RequestBody {
  isChecked: boolean
}

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const userInfo: GetUserInfoResponse = response[0]

    const { password, ...userInfoWithoutPassword } = userInfo

    return NextResponse.json(userInfoWithoutPassword, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get UserInfo API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Get UserInfo API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "Not Authorization" }), {
      status: 401,
    })
  }

  const userId = verifyJwt(accessToken)?.id

  const isMarketingClause = body.isChecked

  try {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marketingClause: isMarketingClause,
      }),
    })
    return NextResponse.json({ status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER POST API (Update Marketing Clause API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(
        `🚨 Unexpected Error (Update Marketing Clause API) : ${error}`
      )
    }

    return new NextResponse(null, { status: 500 })
  }
}
