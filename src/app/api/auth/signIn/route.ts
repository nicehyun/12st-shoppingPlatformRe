import * as bcrypt from "bcrypt"

import { signInAPI } from "@/features/auth/signIn/model/signInAPI"
import {
  emailValidator,
  passwordValidator,
} from "@/features/auth/signUp/utils/validation"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"
import { signJwtAccessToken } from "@/app/lib/jwt"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const email = body.email
  const password = body.password

  console.log(email, password)

  if (!emailValidator(email)) return
  if (!passwordValidator(password)) return

  try {
    const user = await fetch(`${process.env.DB_URL}/users?email=${email}`, {
      next: { revalidate: 0 },
    }).then((res) => res.json())

    if (user.length) {
      console.log("user 있음")

      const { password, ...userInfoWithoutPassword } = user

      if (await bcrypt.compare(password, user.password)) {
        const accessToken = signJwtAccessToken(userInfoWithoutPassword)

        const result = {
          ...userInfoWithoutPassword,
          accessToken,
        }
        return NextResponse.json(result)
      }
    }

    console.log(user)

    return NextResponse.json(null)
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 ${error}`)
    }
    console.error(`🚨 JSON SERVER POST API : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}
