import { NextResponse } from "next/server"

export async function GET() {
  console.log("get test")
  return NextResponse.json(123)
}
