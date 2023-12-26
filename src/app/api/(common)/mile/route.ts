import { verifyJwt } from "@/app/lib/jwt"
import { userInfoAPI } from "@/features/common/models/userInfoAPI"
import { UserInfo, UserInfoWithMile } from "@/features/common/types/user"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

interface RequestBody {
  useMile: number
  getMile: number
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

export async function POST(request: Request) {
  const body: RequestBody = await request.json()
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "Not Authorization" }), {
      status: 401,
    })
  }

  const useMile = body.useMile
  const getMile = body.getMile
  if (useMile < 0 || getMile < 0) return

  const userInfo = await userInfoAPI.getUserInfo(accessToken)

  if (!userInfo) return

  const updateMile = userInfo.mile + getMile - useMile

  try {
    if (userInfo.mile < useMile) {
      throw new Error(
        `🚨 The mileage you are trying to use exceeds the available mileage!`
      )
    }

    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${userInfo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mile: updateMile,
      }),
    })
    return NextResponse.json({ status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER POST API (Update Mile API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(`🚨 Unexpected Error (Update Mile API) : ${error}`)
    }

    return new NextResponse(null, { status: 500 })
  }
}
