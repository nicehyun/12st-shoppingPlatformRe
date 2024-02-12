import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/coupons`, {
      next: { revalidate: 0 },
    }).then((res) => res.json())

    return NextResponse.json(response, { status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
