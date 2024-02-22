import {
  accumulationOfProductsPrice,
  junkOfNoMoreThanOneDigit,
} from "@/features/common/utils/price"
import { NextRequest, NextResponse } from "next/server"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import { formatCheckoutNumber } from "@/features/checkout/models/checkout"
import { ProductInCart } from "@/features/cart/types/cart"
import { Product } from "@/features/common/types/product"
import { UserInfoWithMile } from "@/features/common/types/user"
import {
  parseAddressFromCheckoutFormEvent,
  parseMemoFromCheckoutFormEvent,
  parseMileFromCheckoutFormEvent,
  parsePaymentFromCheckoutFormEvent,
} from "@/features/checkout/models/formData"
import { validCheckFromCheckoutFormEvent } from "@/features/checkout/models/validCheck"

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const email = verifyAccessToken(accessToken)?.email

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/checkout?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const prevCheckoutList = response[0]

    if (prevCheckoutList === undefined) {
      return NextResponse.json([], { status: 200 })
    } else {
      return NextResponse.json(prevCheckoutList.checkoutList, { status: 200 })
    }
  } catch (error: unknown) {
    throw error
  }
}

export async function POST(request: NextRequest) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const email = verifyAccessToken(accessToken)?.email
  const id = verifyAccessToken(accessToken)?.id

  const formData = await request.formData()

  const { isValid, message } = validCheckFromCheckoutFormEvent(formData)

  if (!isValid) {
    return NextResponse.json({
      status: 401,
      error: message,
    })
  }

  const { useMile } = parseMileFromCheckoutFormEvent(formData)

  const coupon = JSON.parse(formData.get("coupon") as string)
  const productList = JSON.parse(formData.get("productList") as string)

  let userInfo: UserInfoWithMile

  // User Info fetch
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    userInfo = response[0]

    if (userInfo.mile < +useMile) {
      return NextResponse.json({
        status: 401,
        error:
          "사용하려는 마일리지가 보유 마일리지를 넘지 않는지 확인해 주세요.",
      })
    }
  } catch (error: unknown) {
    throw error
  }

  const totalPrice = accumulationOfProductsPrice(productList)
  const getMile = junkOfNoMoreThanOneDigit((totalPrice - +useMile) * 0.01)

  const checkoutDate = new Date().toISOString()

  const {
    additionalAddress,
    address,
    phone1,
    recipient,
    deliveryName,
    phone2,
    zipcode,
  } = parseAddressFromCheckoutFormEvent(formData)

  const { deliveryMemo } = parseMemoFromCheckoutFormEvent(formData)

  const { creditName, payment, period } =
    parsePaymentFromCheckoutFormEvent(formData)

  const parsedPayment = JSON.parse(payment)

  const checkoutPayment =
    parsedPayment.value === "credit"
      ? {
          selectedPayment: parsedPayment.value,
          creditName,
          period,
        }
      : {
          selectedPayment: parsedPayment,
        }

  const updatedCheckoutList = {
    deliveryName,
    recipient,
    zipcode,
    address,
    additionalAddress,
    phone1,
    phone2,
    deliveryMemo,
    productList,
    coupon,
    useMile,
    payment: checkoutPayment,
    getMile,
    checkoutDate,
    checkoutNumber: formatCheckoutNumber(checkoutDate),
  }

  const updatedMile = userInfo.mile + getMile - +useMile

  // Update Checkout fetch
  const checkoutPromise = async () => {
    try {
      const getCheckoutResponse = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/checkout?email=${email}`,
        {
          next: { revalidate: 0 },
        }
      ).then((res) => res.json())

      const prevCheckoutList = getCheckoutResponse[0]

      if (prevCheckoutList === undefined) {
        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/checkout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            checkoutList: [updatedCheckoutList],
            email,
          }),
        })
      } else {
        await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/checkout/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            checkoutList: [
              updatedCheckoutList,
              ...prevCheckoutList.checkoutList,
            ],
          }),
        })
      }
    } catch (error: unknown) {
      throw error
    }
  }

  // Update Cart fetch
  const updateCartPromise = async () => {
    try {
      const getCartResponse = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`,
        {
          next: { revalidate: 0 },
        }
      ).then((res) => res.json())

      const productListInCart = getCartResponse[0].productList
      const updatedProductInCart = productListInCart.filter(
        (cartProduct: ProductInCart) => {
          return !productList.some(
            (product: Product) => product.id === cartProduct.id
          )
        }
      )

      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productList: updatedProductInCart,
        }),
      })
    } catch (error: unknown) {
      throw error
    }
  }

  // Update Mile fetch
  const updateMilePromise = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mile: updatedMile,
      }),
    })
  }

  // Product Sell Count Increase fetch
  const updateProductSellCount = async (productInfo: Product) => {
    try {
      const productInfoResponse: Product = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList/${productInfo.id}`,
        {
          next: { revalidate: 0 },
        }
      ).then((res) => res.json())

      await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/productList/${productInfoResponse.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sellCount: productInfoResponse.sellCount + 1,
          }),
        }
      )
    } catch (error: unknown) {
      throw error
    }
  }

  try {
    await checkoutPromise()

    await Promise.all([
      updateCartPromise(),
      updateMilePromise(),
      ...productList.map((product: Product) => updateProductSellCount(product)),
    ])

    return NextResponse.json({ status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
