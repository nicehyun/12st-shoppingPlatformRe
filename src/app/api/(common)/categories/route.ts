import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/categories`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    return NextResponse.json(response, { status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
