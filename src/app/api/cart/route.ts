import { verifyJwt } from "@/app/lib/jwt"
import { GetCartResponse, ProductInCart } from "@/features/cart/types/cart"
import { Product } from "@/features/common/types/product"
import { AxiosError } from "axios"
import { NextResponse } from "next/server"
// TODO : 장바구니 목록 안가져와짐
interface RequestBody {
  productInfo?: Product
  productInCartInfo?: ProductInCart
  checkedProductList?: ProductInCart[]
  direction: "increase" | "decrease" | "remove" | "add" | "remove_checked"
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

    const cartData: GetCartResponse = response[0]

    return NextResponse.json(cartData, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get CartData API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Get CartData API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")

  const body: RequestBody = await request.json()

  const productInfo = body.productInfo
  const productInCartInfo = body.productInCartInfo
  const checkedProductList = body.checkedProductList
  const direction = body.direction

  if (
    direction !== "increase" &&
    direction !== "decrease" &&
    direction !== "remove" &&
    direction !== "add" &&
    direction !== "remove_checked"
  )
    return

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  let cartData: GetCartResponse

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`
    ).then((res) => res.json())

    cartData = response[0]
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get CartData API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Get CartData API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }

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

          await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartData.id}`, {
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
          console.error(
            `🚨 JSON SERVER POST API (Add CartData API) : ${response.data}`
          )
          return new NextResponse(null, { status: response.status })
        }
        console.error(`🚨 Unexpected Error (Add CartData API) : ${error}`)
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

        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartData.id}`, {
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
          console.error(
            `🚨 JSON SERVER POST API (Increase CartData API) : ${response.data}`
          )
          return new NextResponse(null, { status: response.status })
        }
        console.error(`🚨 Unexpected Error (Increase CartData API) : ${error}`)
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

        const updatedProductList = cartData.productList.filter(
          (product) => product.id !== productInfo.id
        )

        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartData.id}`, {
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
          console.error(
            `🚨 JSON SERVER POST API (Remove CartData API) : ${response.data}`
          )
          return new NextResponse(null, { status: response.status })
        }
        console.error(`🚨 Unexpected Error (Remove CartData API) : ${error}`)
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

        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartData.id}`, {
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
          console.error(
            `🚨 JSON SERVER POST API (Decrease CartData API) : ${response.data}`
          )
          return new NextResponse(null, { status: response.status })
        }
        console.error(`🚨 Unexpected Error (Decrease CartData API) : ${error}`)
        return new NextResponse(null, { status: 500 })
      }

    case "remove_checked":
      if (!checkedProductList) {
        return new Response(
          JSON.stringify({ error: "Not checked ProductInfo" }),
          {
            status: 401,
          }
        )
      }

      const updatedProductInCart = cartData.productList.filter(
        (cartProduct) => {
          return !checkedProductList.some(
            (product) => product.id === cartProduct.id
          )
        }
      )

      try {
        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartData.id}`, {
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
          console.error(
            `🚨 JSON SERVER POST API (Remove_checked CartData API) : ${response.data}`
          )
          return new NextResponse(null, { status: response.status })
        }
        console.error(
          `🚨 Unexpected Error (Remove_checked CartData API) : ${error}`
        )
        return new NextResponse(null, { status: 500 })
      }
  }
}
