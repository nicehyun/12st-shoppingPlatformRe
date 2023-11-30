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
import { signUpAPI } from "@/features/auth/signUp/models/signUpApi"

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

  const response = await signUpAPI.addUserInfo(userInfoWithBcryptedPassword)

  return NextResponse.json(response)
}
