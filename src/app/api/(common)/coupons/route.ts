import { AxiosError } from "axios"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/coupons`, {
      next: { revalidate: 0 },
    }).then((res) => res.json())

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 JSON SERVER GET API (Get Coupon) : ${response.data}`)
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(`🚨 Unexpected Error (Get Coupon) : ${error}`)
    }

    return new NextResponse(null, { status: 500 })
  }
}
