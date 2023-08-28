import { UserInfo } from "@/common/types/user"
import addUserInfo from "@/firebase/firestore/addUserInfo"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  console.log(name)
  console.log(email)
  return NextResponse.json({ name, email })
}
