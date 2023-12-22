import { UserInfo } from "@/features/common/types/user"
import { IRequestSignUp } from "@/features/auth/signUp/types/signUp"
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import { AxiosError } from "axios"

export async function POST(request: Request) {
  const { userInfo, requireCheck }: IRequestSignUp = await request.json()

  const isRequireCheck = Object.values(requireCheck).every((value) => !!value)

  if (!isRequireCheck) return
  if (
    !phoneValidator(userInfo.phone) ||
    !nameValidator(userInfo.name) ||
    !emailValidator(userInfo.email) ||
    !passwordValidator(userInfo.password)
  )
    return

  const userInfoWithBcryptedPassword: UserInfo = {
    ...userInfo,
    password: await bcrypt.hash(userInfo.password, 10),
  }

  try {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userInfoWithBcryptedPassword, mile: 0 }),
    }).then((res) => res.json())

    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userInfoWithBcryptedPassword.email,
        checkoutList: [],
      }),
    }).then((res) => res.json())

    return NextResponse.json({ status: 200 })
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
