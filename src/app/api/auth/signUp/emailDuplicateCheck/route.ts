import { NextResponse } from "next/server"
import { AxiosError } from "axios"

interface RequestBody {
  email: string
}

type EmailDuplicateCheckResponse = [
  {
    email: string
    password: string
    name: string
    phone: string
    marketingClause: boolean
    mile: number
  }
]

export async function POST(request: Request): Promise<boolean | unknown> {
  const body: RequestBody = await request.json()

  const email = body.email

  try {
    const response: EmailDuplicateCheckResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const isExistedEmail = !!response.length

    return NextResponse.json({ isExistedEmail }, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 ${error}`)
      console.error(
        `🚨 JSON SERVER POST API ( Email Duplicate ) : ${response.data}`
      )
    } else {
      console.error(`🚨 Unexpected Error ( Email Duplicate ) : ${error}`)
    }

    return new NextResponse(null, { status: 500 })
  }
}
