import {
  validCheckIncreaseProductAmountToCart,
  validCheckProductInfo,
} from "@/features/cart/models/validateCheck"
import { GetCartResponse, ProductInCart } from "@/features/cart/types/cart"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import { NextResponse } from "next/server"

interface RequestBody {
  productInfo: ProductInCart
}

export async function POST(request: Request) {
  const accessToken = request.headers.get("authorization")
  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const body: RequestBody = await request.json()

  const productInfo = body.productInfo

  const { valid: productInfoValid, message: productInfoValidMessage } =
    validCheckProductInfo(productInfo)

  if (!productInfoValid) {
    return NextResponse.json({
      status: 401,
      error: productInfoValidMessage,
    })
  }

  const {
    valid: IncraseProductAmountValid,
    message: incraseProductAmountMessage,
  } = validCheckIncreaseProductAmountToCart(productInfo)

  if (!IncraseProductAmountValid) {
    return NextResponse.json({
      status: 401,
      error: incraseProductAmountMessage,
    })
  }

  const id = verifyAccessToken(accessToken)?.id

  try {
    const response: GetCartResponse = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?id=${id}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const prevProductListInCart = response[0].productList

    const updatedProductInCart = prevProductListInCart.map((prevProduct) => {
      return prevProduct.id === productInfo.id
        ? { ...prevProduct, amount: prevProduct.amount + 1 }
        : prevProduct
    })

    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productList: updatedProductInCart,
      }),
    })

    return NextResponse.json({
      status: 200,
    })
  } catch (error: unknown) {
    throw error
  }
}
