import * as bcrypt from "bcrypt"

import {
  emailValidator,
  passwordValidator,
} from "@/features/auth/signUp/utils/validation"
import { NextRequest, NextResponse } from "next/server"
import {
  generateAccessToken,
  generateRefreshToken,
} from "@/features/common/utils/jwt"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: NextRequest) {
  const body: RequestBody = await request.json()

  const email = body.email
  const requestPassword = body.password

  if (!emailValidator(email)) return
  if (!passwordValidator(requestPassword)) return

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const user = response[0]

    if (user) {
      const { password, ...userInfoWithoutPassword } = user

      if (await bcrypt.compare(requestPassword, user.password)) {
        const accessToken = await generateAccessToken({
          email: userInfoWithoutPassword.email,
          id: userInfoWithoutPassword.id,
        })

        const refreshToken = await generateRefreshToken({
          email: userInfoWithoutPassword.email,
          id: userInfoWithoutPassword.id,
        })

        const result = {
          accessToken,
          refreshToken,
          ...userInfoWithoutPassword,
        }

        return NextResponse.json(result, { status: 200 })
      } else {
        return NextResponse.json({
          status: 401,
          error: "비밀번호가 일치하지 않습니다.",
        })
      }
    } else {
      return NextResponse.json({
        status: 401,
        error: "해당 이메일로 등록된 계정이 없습니다.",
      })
    }
  } catch (error: any) {
    throw new Error(error.message)
  }
}
