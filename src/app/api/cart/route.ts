import { Product, Products } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"

interface RequestBody {
  email: string
  productInfo: Product
}

type getCartResponse = {
  email: string
  productList: Products
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json()

  const email = body.email
  const productInfo = body.productInfo

  const productInfoInCart = { ...productInfo, amount: 1 }

  if (!email) return

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`
    ).then((res) => res.json())

    const cartData: getCartResponse = response[0]

    const existedProduct = cartData.productList.some(
      (product) => product.id === productInfo.id
    )

    if (existedProduct) {
      return NextResponse.json({ status: 200 })
    }

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
      const cartId = response[0].id

      console.log(cartId)
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
}
