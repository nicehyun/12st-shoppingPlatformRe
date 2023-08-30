import { verifyJwt } from "@/app/lib/jwt"
import { getProductListInCart } from "@/firebase/firestore/cart"

import { headers } from "next/headers"

export async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  //   const accessToken = request.headers.get("authorization")
  //   console.log(accessToken)
  //   if (!accessToken || !verifyJwt(accessToken)) {
  //     return new Response(JSON.stringify({ error: "No Authorization" }), {
  //       status: 401,
  //     })
  //   }
  const test = await getProductListInCart(params.email)

  console.log(test)

  const userEmail = params.email

  return new Response(JSON.stringify(userEmail))
}
