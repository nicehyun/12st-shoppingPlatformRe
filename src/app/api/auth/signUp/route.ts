import { UserInfo } from "@/features/common/types/user"
import {
  emailValidator,
  nameValidator,
  passwordValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import { ISignUpRequest } from "@/features/auth/signUp/types/signUp"

export async function POST(request: Request) {
  const signUpRequest: ISignUpRequest = await request.json()
  const { userInfo, verification } = signUpRequest

  const { email, name, password, phone } = userInfo
  const { isEmailChecked, isPhoneChecked } = verification

  if (
    !phoneValidator(phone) ||
    !nameValidator(name) ||
    !emailValidator(email) ||
    !passwordValidator(password)
  ) {
    return NextResponse.json({
      status: 401,
      error: "올바른 회원가입 정보가 아닙니다. 다시 입력해주세요.",
    })
  }

  if (!isEmailChecked) {
    return NextResponse.json({
      status: 401,
      error: "이메일 중복 검사를 해주세요.",
    })
  }

  if (!isPhoneChecked) {
    return NextResponse.json({
      status: 401,
      error: "휴대폰 본인인증을 해주세요.",
    })
  }

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
    })

    return NextResponse.json({ status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
