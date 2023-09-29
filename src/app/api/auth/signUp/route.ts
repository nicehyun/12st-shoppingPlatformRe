import { UserInfo } from "@/common/types/user"
import { addUserInfo } from "@/firebase/firestore/user"

import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()

  const userInfo: UserInfo = {
    email: formData.get("email") as string,
    password: await bcrypt.hash(formData.get("password") as string, 10),
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    marketingClause: formData.get("marketing") === "on",
  }

  const response = await addUserInfo(userInfo)

  return NextResponse.json(response)
}
