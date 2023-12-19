import { verifyJwt } from "@/app/lib/jwt"
import { Product, Products } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

type getCartResponse = {
  email: string
  productList: Products
}

interface RequestBody {
  productInfo: Product
  direction: "increase" | "decrease" | "remove"
}

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const cartData: getCartResponse = response[0]

    return NextResponse.json(cartData.productList, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 ${error}`)
    }
    console.error(`🚨 JSON SERVER GET API : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")

  console.log(accessToken)

  const body: RequestBody = await request.json()

  const productInfo = body.productInfo
  const direction = body.direction

  if (
    direction !== "increase" &&
    direction !== "decrease" &&
    direction !== "remove"
  )
    return

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  const productInfoInCart = { ...productInfo, amount: 1 }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`
  ).then((res) => res.json())

  const cartData: getCartResponse = response[0]

  switch (direction) {
    case "increase":
      try {
        if (!cartData) {
          await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              productList: [productInfoInCart],
            }),
          })
        } else {
          const existedProduct = cartData.productList.some(
            (product) => product.id === productInfo.id
          )

          if (existedProduct) {
            return NextResponse.json({ status: 200 })
          }

          const cartId = response[0].id

          await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productList: [productInfoInCart, ...cartData.productList],
            }),
          })
        }
        return NextResponse.json({ status: 200 })
      } catch (error) {
        const { response } = error as unknown as AxiosError
        if (response) {
          console.error(`🚨 ${error}`)
          console.error(`🚨 JSON SERVER POST API: ${response.data}`)
        } else {
          console.error(`🚨 Unexpected Error: ${error}`)
        }

        return new NextResponse(null, { status: 500 })
      }

    case "decrease":

    case "remove":
      try {
        const existedProduct = cartData.productList.some(
          (product) => product.id === productInfo.id
        )

        if (!existedProduct) {
          return NextResponse.json({
            status: 404,
            error: "상품을 찾을 수 없습니다.",
          })
        }

        const cartId = response[0].id

        const updatedProductList = cartData.productList.filter(
          (product) => product.id !== productInfo.id
        )

        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productList: updatedProductList,
          }),
        })

        return NextResponse.json({ status: 200 })
      } catch (error) {
        const { response } = error as unknown as AxiosError
        if (response) {
          console.error(`🚨 ${error}`)
          console.error(`🚨 JSON SERVER POST API: ${response.data}`)
        } else {
          console.error(`🚨 Unexpected Error: ${error}`)
        }

        return new NextResponse(null, { status: 500 })
      }
  }
}
