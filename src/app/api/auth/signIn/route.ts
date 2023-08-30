import { signIn } from "@/firebase/firestore/signIn"

interface RequestBody {
  email: string
  password: string
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  try {
    const user = await signIn(body.email, body.password)

    return new Response(JSON.stringify(user))
  } catch (error) {
    return new Response(JSON.stringify(null))
  }
}
