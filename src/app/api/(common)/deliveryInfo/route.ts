import { validCheckDeliveryInfo } from "@/features/checkout/models/validCheck"
import { pasrseDeliveryInfoFromFormData } from "@/features/common/models/formData"

import { verifyAccessToken } from "@/features/common/utils/jwt"
import { parsePrevDeliveryInfoFromFormData } from "@/features/myPage/models/formData"
import { validCheckComparisonOfChangeDeliveryInfo } from "@/features/myPage/models/validCheck"
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

  const formData = await request.formData()

  const paddingUpdateDeliveryInfo = pasrseDeliveryInfoFromFormData(formData)

  const { prevDeliveryInfo } = parsePrevDeliveryInfoFromFormData(formData)

  if (prevDeliveryInfo) {
    const { valid, message } =
      validCheckComparisonOfChangeDeliveryInfo(formData)

    if (!valid) {
      return NextResponse.json({
        status: 401,
        error: message,
      })
    }
  }

  const { isValid, message } = validCheckDeliveryInfo(formData)

  if (!isValid) {
    return NextResponse.json({
      status: 401,
      error: message,
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
          deliveryInfo: paddingUpdateDeliveryInfo,
        }),
      })
    } else {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveryInfo: paddingUpdateDeliveryInfo,
        }),
      })
    }

    return NextResponse.json({ status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
