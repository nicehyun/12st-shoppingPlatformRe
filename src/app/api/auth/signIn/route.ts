import * as bcrypt from "bcrypt"

import {
  emailValidator,
  passwordValidator,
} from "@/features/auth/signUp/utils/validation"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"
import { signJwtAccessToken } from "@/features/common/utils/jwt"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
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
        const accessToken = signJwtAccessToken(userInfoWithoutPassword)

        const result = {
          ...userInfoWithoutPassword,
          accessToken,
        }

        return NextResponse.json(result, { status: 200 })
      }
    } else {
      return NextResponse.json(null, { status: 400 })
    }
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 ${error}`)
      console.error(`🚨 JSON SERVER POST API: ${response.data}`)
    } else {
      console.error(`🚨 Unexpected Error: ${error}`)
    }

    return new NextResponse(null, { status: 500 })
  }
}
