import {
  CheckoutClauseCheck,
  CheckoutList,
} from "@/features/checkout/types/checkout"
import {
  accumulationOfProductsPrice,
  junkOfNoMoreThanOneDigit,
} from "@/features/common/utils/price"
import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"

import { NextRequest, NextResponse } from "next/server"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import { formatCheckoutNumber } from "@/features/checkout/utils/checkout"
import { ProductInCart } from "@/features/cart/types/cart"
import { Product } from "@/features/common/types/product"
import { UserInfoWithMile } from "@/features/common/types/user"

interface RequestBody {
  checkoutInfo: CheckoutList
  isClauseCheck: Omit<CheckoutClauseCheck, "all">
}

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
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
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function POST(request: NextRequest) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return new Response(JSON.stringify({ error: "Not Authorization" }), {
      status: 401,
    })
  }

  const email = verifyAccessToken(accessToken)?.email
  const id = verifyAccessToken(accessToken)?.id

  const { checkoutInfo, isClauseCheck }: RequestBody = await request.json()

  let userInfo: UserInfoWithMile

  if (!nameValidator(checkoutInfo.recipient)) {
    return NextResponse.json({
      status: 401,
      error: "올바른 수령인 이름을 입력해주세요.",
    })
  }

  if (!checkoutInfo.zipcode) {
    return NextResponse.json({
      status: 401,
      error: "우편번호를 입력해주세요.",
    })
  }
  if (!checkoutInfo.address) {
    return NextResponse.json({
      status: 401,
      error: "배송지 주소를 입력해주세요.",
    })
  }
  if (!additionalAddressValidator(checkoutInfo.additionalAddress)) {
    return NextResponse.json({
      status: 401,
      error: "올바른 배송지 상세 주소를 입력해주세요.",
    })
  }
  if (!phoneValidator(checkoutInfo.phone1)) {
    return NextResponse.json({
      status: 401,
      error: "올바른 연락처를 입력해주세요.",
    })
  }

  if (
    checkoutInfo.payment.selectedPayment === "credit" &&
    !checkoutInfo.payment.creditName
  ) {
    return NextResponse.json({
      status: 401,
      error: "카드사를 선택해주세요.",
    })
  }

  if (
    !isClauseCheck.collectionOfUserInfo ||
    !isClauseCheck.paymentAgency ||
    !isClauseCheck.provisionOfUserInfo
  ) {
    return NextResponse.json({
      status: 401,
      error: "결제를 위해 필수사항에 모두 동의해주세요.",
    })
  }

  const useMile = checkoutInfo.useMile

  // User Info fetch
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    userInfo = response[0]

    if (userInfo.mile < useMile) {
      return NextResponse.json({
        status: 401,
        error:
          "사용하려는 마일리지가 보유 마일리지를 넘지 않는지 확인해 주세요.",
      })
    }
  } catch (error: any) {
    throw new Error(error)
  }

  const totalPrice = accumulationOfProductsPrice(checkoutInfo.productList)
  const getMile = junkOfNoMoreThanOneDigit(
    (totalPrice - checkoutInfo.useMile) * 0.01
  )

  const checkoutDate = new Date().toISOString()
  const updatedCheckoutList = {
    ...checkoutInfo,
    getMile,
    checkoutDate,
    checkoutNumber: formatCheckoutNumber(checkoutDate),
  }

  const updatedMile = userInfo.mile + getMile - useMile

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
            checkoutList: [updatedCheckoutList],
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
    } catch (error: any) {
      throw new Error(error)
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
          return !checkoutInfo.productList.some(
            (product) => product.id === cartProduct.id
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
    } catch (error: any) {
      throw new Error(error)
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
    } catch (error: any) {
      throw new Error(error)
    }
  }

  try {
    await checkoutPromise()

    await Promise.all([
      updateCartPromise(),
      updateMilePromise(),
      ...checkoutInfo.productList.map((product) =>
        updateProductSellCount(product)
      ),
    ])

    return NextResponse.json({ status: 200 })
  } catch (error: any) {
    throw new Error(error)
  }
}
