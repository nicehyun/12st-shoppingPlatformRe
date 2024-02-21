import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import {
  parseClauseCheckedFromSignUpFormData,
  parseEmailFromSignUpFormData,
  parseNameFromSignUpFormData,
  parsePasswordFromSignUpFormData,
  parsePhoneNumberFromSignUpFormData,
  validCheckFromSignUpFormData,
} from "@/features/auth/signUp/models/formData"

export async function POST(request: Request) {
  const formData = await request.formData()

  const { isValid, message } = validCheckFromSignUpFormData(formData)

  if (!isValid) {
    return NextResponse.json({
      status: 401,
      error: message,
    })
  }

  const { email } = parseEmailFromSignUpFormData(formData)
  const { password } = parsePasswordFromSignUpFormData(formData)
  const { isMarketingClauseCheck } =
    parseClauseCheckedFromSignUpFormData(formData)
  const { name } = parseNameFromSignUpFormData(formData)
  const { phone } = parsePhoneNumberFromSignUpFormData(formData)

  const userInfoWithBcryptedPassword = {
    marketingClause: isMarketingClauseCheck,
    email,
    name,
    phone,
    password: await bcrypt.hash(password, 10),
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
  } catch (error: unknown) {
    throw error
  }
}
