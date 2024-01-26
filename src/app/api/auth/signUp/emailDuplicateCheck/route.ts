import { emailValidator } from "@/features/auth/signUp/utils/validation"
import { NextResponse } from "next/server"

interface RequestBody {
  email: string
}

export async function POST(request: Request): Promise<boolean | unknown> {
  const body: RequestBody = await request.json()

  const email = body.email

  if (!emailValidator(email)) {
    return NextResponse.json({
      status: 401,
      error: "유효한 이메일 형식 입력 후 중복확인을 진행해주세요.",
    })
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const isExistedEmail = !!response.length

    if (isExistedEmail) {
      return NextResponse.json({
        status: 409,
        error: "이미 존재하는 이메일입니다.",
      })
    }

    return NextResponse.json({ status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
