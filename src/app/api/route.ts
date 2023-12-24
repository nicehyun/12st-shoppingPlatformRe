import { AxiosError } from "axios"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const productList = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/productList`,
      {
        next: { revalidate: 10000 },
      }
    ).then((res) => res.json())

    return NextResponse.json(productList)
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 ${error}`)
    }
    console.error(`🚨 JSON SERVER GET API : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}
