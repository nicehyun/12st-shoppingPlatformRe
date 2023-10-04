import { signInAPI } from "@/features/auth/signIn/model/signInAPI"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  try {
    const user = await signInAPI.signIn(body.email, body.password)

    return new Response(JSON.stringify(user))
  } catch (error) {
    return new Response(JSON.stringify(null))
  }
}
