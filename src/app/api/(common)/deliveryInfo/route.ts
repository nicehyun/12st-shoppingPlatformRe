import { DeliveryInfo } from "@/features/common/types/deliveryInfo"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

interface RequestBody {
  updateDeliveryInfo: DeliveryInfo
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
      `${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    if (response[0] === undefined) {
      return NextResponse.json(null, { status: 200 })
    } else {
      return NextResponse.json(response[0].deliveryInfo, { status: 200 })
    }
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

  const body: RequestBody = await request.json()
  const updateDeliveryInfo = body.updateDeliveryInfo

  if (!updateDeliveryInfo) {
    return NextResponse.json({
      status: 401,
      error: "배송지 정보가 필요합니다.",
    })
  }

  const email = verifyAccessToken(accessToken)?.email
  const id = verifyAccessToken(accessToken)?.id

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    if (response[0] === undefined) {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          email,
          deliveryInfo: updateDeliveryInfo,
        }),
      })
    } else {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveryInfo: updateDeliveryInfo,
        }),
      })
    }

    return NextResponse.json({ status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
