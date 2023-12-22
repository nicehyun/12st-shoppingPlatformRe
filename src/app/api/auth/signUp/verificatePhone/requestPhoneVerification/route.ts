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
import { PhoneAuthProvider, RecaptchaVerifier } from "firebase/auth"
import { verifyPhoneAPI } from "@/features/auth/signUp/models/verifyPhoneAPI"

let recaptchaVerifier: RecaptchaVerifier

interface RequestBody {
  phone: string
  isRequestCode: boolean
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const phone = body.phone
  const isRequestCode = body.isRequestCode

  try {
    verifyPhoneAPI.requestPhoneVerification(phone, isRequestCode)
    return NextResponse.json({ status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 ${error}`)
    }
    console.error(`🚨 JSON SERVER POST API : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}
