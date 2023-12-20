import { verifyJwt } from "@/app/lib/jwt"
import { DeliveryInfo } from "@/features/common/types/address"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

type GetDeliveryInfoResponse = {
  id: number
  email: string
  deliveryInfo: DeliveryInfo
}

interface RequestBody {
  updateDeliveryInfo: DeliveryInfo
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
      `${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const deliveryInfo: GetDeliveryInfoResponse = response[0]

    return NextResponse.json(deliveryInfo, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get DeliveryInfo API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Get DeliveryInfo API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")

  const body: RequestBody = await request.json()
  const updateDeliveryInfo = body.updateDeliveryInfo

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "Not Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  if (!updateDeliveryInfo) {
    return new Response(JSON.stringify({ error: "Not Update deliveryInfo" }), {
      status: 401,
    })
  }

  let deliveryInfo: GetDeliveryInfoResponse

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    deliveryInfo = response[0]
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get DeliveryInfo API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Get DeliveryInfo API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }

  if (!deliveryInfo) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          deliveryInfo: updateDeliveryInfo,
        }),
      })

      return NextResponse.json({ status: 200 })
    } catch (error) {
      const { response } = error as unknown as AxiosError
      if (response) {
        console.error(
          `🚨 JSON SERVER POST API (Add DeliveryInfo API) : ${response.data}`
        )
        return new NextResponse(null, { status: response.status })
      } else {
        console.error(`🚨 Unexpected Error (Add DeliveryInfo API) : ${error}`)
      }

      return new NextResponse(null, { status: 500 })
    }
  } else {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo/${deliveryInfo.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            deliveryInfo: updateDeliveryInfo,
          }),
        }
      )
      return NextResponse.json({ status: 200 })
    } catch (error) {
      const { response } = error as unknown as AxiosError
      if (response) {
        console.error(
          `🚨 JSON SERVER POST API (Update DeliveryInfo API) : ${response.data}`
        )
        return new NextResponse(null, { status: response.status })
      } else {
        console.error(
          `🚨 Unexpected Error (Update DeliveryInfo API) : ${error}`
        )
      }

      return new NextResponse(null, { status: 500 })
    }
  }
}
