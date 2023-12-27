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

  const { email } = userInfoWithBcryptedPassword

  const createUserPromise = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userInfoWithBcryptedPassword, mile: 0 }),
    })
  }

  const createCheckoutPromise = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        checkoutList: [],
      }),
    })
  }

  const createHeartPromise = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/heart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        heartList: [],
      }),
    })
  }

  const createCounselingPromise = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/customerCounseling`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        customerCounselingList: [],
      }),
    })
  }

  const cteateCartPromise = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        productList: [],
      }),
    })
  }

  try {
    await Promise.all([
      createUserPromise(),
      createCheckoutPromise(),
      createHeartPromise(),
      createCounselingPromise(),
      cteateCartPromise(),
    ])

    return NextResponse.json({ status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 JSON SERVER POST API - Sign Up : ${response.data}`)
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error - Sign Up : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}
