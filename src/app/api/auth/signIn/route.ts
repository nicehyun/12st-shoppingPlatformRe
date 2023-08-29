import { signIn } from "@/firebase/firestore/signIn"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  const response = await signIn(email, password)

  return NextResponse.json(email)
}
