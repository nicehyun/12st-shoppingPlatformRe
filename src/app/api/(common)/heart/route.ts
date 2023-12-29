import { verifyJwt } from "@/features/common/utils/jwt"
import { GetHeartListResponse } from "@/features/common/types/heart"
import { Product } from "@/features/common/types/product"

import { AxiosError } from "axios"
import { NextResponse } from "next/server"

interface RequestBody {
  productInfo: Product
  direction: "remove" | "add"
}

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "Not Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/heart?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    return NextResponse.json(response[0], { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get Heart List) - Update : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(`🚨 Unexpected Error (Get Heart List) - Update  : ${error}`)
    }

    return new NextResponse(null, { status: 500 })
  }
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "Not Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email
  const body: RequestBody = await request.json()
  const direction = body.direction
  const productInfo = body.productInfo

  if (direction !== "remove" && direction !== "add") {
    return new Response(JSON.stringify({ error: "Invalid Direction" }), {
      status: 401,
    })
  }

  const getHeartListPromise: Promise<GetHeartListResponse[]> = fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/heart?email=${email}`,
    {
      next: { revalidate: 0 },
    }
  ).then((res) => res.json())

  switch (direction) {
    case "add":
      try {
        const getHeartListResponse = await getHeartListPromise
        const prevHeartList = getHeartListResponse[0]

        const updateHeartList = [productInfo, ...prevHeartList.heartList]

        await fetch(
          `${process.env.NEXT_PUBLIC_DB_URL}/heart/${prevHeartList.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              heartList: updateHeartList,
            }),
          }
        )
      } catch (error) {
        const { response } = error as unknown as AxiosError
        if (response) {
          console.error(
            `🚨 JSON SERVER POST API (Update Heart List API) : ${response.data}`
          )
          return new NextResponse(null, { status: response.status })
        } else {
          console.error(
            `🚨 Unexpected Error (Update Heart List API) : ${error}`
          )
        }

        return new NextResponse(null, { status: 500 })
      }

      break

    case "remove":
      try {
        const getHeartListResponse = await getHeartListPromise
        const prevHeartList = getHeartListResponse[0]
        const updateHeartList = prevHeartList.heartList.filter(
          (product) => product.id !== productInfo.id
        )

        await fetch(
          `${process.env.NEXT_PUBLIC_DB_URL}/heart/${prevHeartList.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              heartList: updateHeartList,
            }),
          }
        )
      } catch (error) {
        const { response } = error as unknown as AxiosError
        if (response) {
          console.error(
            `🚨 JSON SERVER POST API (Update Heart List API) : ${response.data}`
          )
          return new NextResponse(null, { status: response.status })
        } else {
          console.error(
            `🚨 Unexpected Error (Update Heart List API) : ${error}`
          )
        }

        return new NextResponse(null, { status: 500 })
      }

      break
  }

  return NextResponse.json({ status: 200 })
}
