import { verifyJwt } from "@/app/lib/jwt"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const accessToken = request.headers.get("authorization")
  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }
  console.log(params)

  const id = Number(params.id)

  return new Response(JSON.stringify(id))
}
