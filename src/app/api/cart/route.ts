import { verifyJwt } from "@/app/lib/jwt"
import { ProductInCart } from "@/features/cart/types/cart"
import { Product, Products } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

type getCartResponse = {
  email: string
  productList: ProductInCart[]
}

interface RequestBody {
  productInfo?: Product
  productInCartInfo?: ProductInCart
  direction: "increase" | "decrease" | "remove" | "add"
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
  const productInCartInfo = body.productInCartInfo
  const direction = body.direction

  if (
    direction !== "increase" &&
    direction !== "decrease" &&
    direction !== "remove" &&
    direction !== "add"
  )
    return

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`
  ).then((res) => res.json())

  const cartData: getCartResponse = response[0]
  const cartId = response[0].id

  switch (direction) {
    case "add":
      if (!productInfo) {
        return new Response(JSON.stringify({ error: "Not ProductInfo" }), {
          status: 401,
        })
      }

      try {
        const productInfoInCart = { ...productInfo, amount: 1 }

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

    case "increase":
      if (!productInCartInfo) {
        return new Response(JSON.stringify({ error: "Not ProductInfo" }), {
          status: 401,
        })
      }

      try {
        const updatedProductInCart = cartData.productList.map((product) => {
          return product.id === productInCartInfo.id
            ? { ...product, amount: product.amount + 1 }
            : product
        })

        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            productList: updatedProductInCart,
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

    case "remove":
      if (!productInfo) {
        return new Response(JSON.stringify({ error: "Not ProductInfo" }), {
          status: 401,
        })
      }

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

    case "decrease":
      if (!productInCartInfo) {
        return new Response(JSON.stringify({ error: "Not ProductInfo" }), {
          status: 401,
        })
      }

      try {
        const updatedProductInCart = cartData.productList.map((product) => {
          return product.id === productInCartInfo.id
            ? { ...product, amount: product.amount - 1 }
            : product
        })

        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            productList: updatedProductInCart,
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
