import { deliveryInfoAPI } from "@/features/common/models/deliveryInfoAPI"

import {
  CheckoutList,
  GetCheckoutListResponse,
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
import { checkoutAPI } from "@/features/checkout/models/checkoutAPI"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"
import { NextRequest, NextResponse } from "next/server"
import { verifyJwt } from "@/app/lib/jwt"
import { userInfoAPI } from "@/features/common/models/userInfoAPI"
import { AxiosError } from "axios"
import { formatCheckoutNumber } from "@/features/checkout/utils/checkout"
import { cartAPI } from "@/features/cart/models/cartAPI"
import { GetCartResponse } from "@/features/cart/types/cart"
import { GetUserInfoResponse } from "@/features/common/types/user"
import { Product } from "@/features/common/types/product"

interface RequestBody {
  checkoutInfo: CheckoutList
  isClauseCheck: Omit<CheckoutClauseCheck, "all">
  isUpdateDeliveryInfo: boolean
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
      `${process.env.NEXT_PUBLIC_DB_URL}/checkout?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const responseData: GetCheckoutListResponse = response[0]

    return NextResponse.json(responseData ?? null, { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get Checkout List API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Get Checkout List API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "Not Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  const { checkoutInfo, isClauseCheck, isUpdateDeliveryInfo }: RequestBody =
    await request.json()

  if (!nameValidator(checkoutInfo.recipient)) return
  if (!checkoutInfo.zipcode) return
  if (!checkoutInfo.address) return
  if (!additionalAddressValidator(checkoutInfo.additionalAddress)) return
  if (!phoneValidator(checkoutInfo.phone1)) return

  if (
    checkoutInfo.payment.selectedPayment === "credit" &&
    !checkoutInfo.payment.creditName
  )
    return

  if (
    !isClauseCheck.collectionOfUserInfo ||
    !isClauseCheck.paymentAgency ||
    !isClauseCheck.provisionOfUserInfo
  )
    return

  const totalPrice = accumulationOfProductsPrice(checkoutInfo.productList)
  const getMile = junkOfNoMoreThanOneDigit(
    (totalPrice - checkoutInfo.useMile) * 0.01
  )
  const useMile = checkoutInfo.useMile

  if (isUpdateDeliveryInfo) {
    await deliveryInfoAPI.updateDeliveryInfo(
      {
        deliveryName: checkoutInfo.deliveryName,
        recipient: checkoutInfo.recipient,
        additionalAddress: checkoutInfo.additionalAddress,
        address: checkoutInfo.address,
        zipcode: checkoutInfo.zipcode,
        phone1: checkoutInfo.phone1,
        phone2: checkoutInfo.phone2,
      },
      accessToken
    )
  }

  let cartResponse: GetCartResponse
  let checkoutListResponse: GetCheckoutListResponse
  let userInfo: GetUserInfoResponse
  let updatedMile: number
  const checkoutDate = new Date().toISOString()
  const updatedCheckoutList = {
    ...checkoutInfo,
    checkoutDate,
    checkoutNumber: formatCheckoutNumber(checkoutDate),
  }

  // add checkout list api
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/checkout?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    checkoutListResponse = response[0]
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get Checkout List API - Checkout) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(
      `🚨 Unexpected Error (Get Checkout List API - Checkout) : ${error}`
    )
    return new NextResponse(null, { status: 500 })
  }

  if (checkoutListResponse) {
    await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/checkout/${checkoutListResponse.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkoutList: [
            updatedCheckoutList,
            ...checkoutListResponse.checkoutList,
          ],
        }),
      }
    )
  }

  try {
    if (!checkoutListResponse?.checkoutList) {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          checkoutList: [updatedCheckoutList],
        }),
      })
    } else {
      await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/checkout/${checkoutListResponse.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            checkoutList: [
              updatedCheckoutList,
              ...checkoutListResponse.checkoutList,
            ],
          }),
        }
      )
    }
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Add Checkout API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error (Add Checkout API) : ${error}`)
    return new NextResponse(null, { status: 500 })
  }

  // delete cart api
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`,
      { next: { revalidate: 0 } }
    ).then((res) => res.json())

    cartResponse = response[0]
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get CartData API - Checkout) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(
      `🚨 Unexpected Error (Get CartData API - Checkout) : ${error}`
    )
    return new NextResponse(null, { status: 500 })
  }

  const updatedProductInCart = cartResponse.productList.filter(
    (cartProduct) => {
      return !checkoutInfo.productList.some(
        (product) => product.id === cartProduct.id
      )
    }
  )

  try {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${cartResponse.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        productList: updatedProductInCart,
      }),
    })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER POST API (Delete Checkout ProductList In Cart API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(
      `🚨 Unexpected Error (Delete Checkout ProductList In Cart API) : ${error}`
    )
    return new NextResponse(null, { status: 500 })
  }

  // update user mile api
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    userInfo = response[0]
    updatedMile = userInfo.mile + getMile - useMile
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get UserInfo API - Checkout) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(
      `🚨 Unexpected Error (Get UserInfo API - Checkout) : ${error}`
    )
    return new NextResponse(null, { status: 500 })
  }

  try {
    if (userInfo.mile < useMile) {
      throw new Error(
        `🚨 The mileage you are trying to use exceeds the available mileage!`
      )
    }

    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${userInfo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mile: updatedMile,
      }),
    })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER POST API (Update Mile API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    } else {
      console.error(`🚨 Unexpected Error (Update Mile API) : ${error}`)
    }

    return new NextResponse(null, { status: 500 })
  }

  // update product sell count api
  const updateProductSellCount = async (productInfo: Product) => {
    try {
      const productInfoResponse = await fetch(
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
    } catch (error) {
      const { response } = error as unknown as AxiosError
      if (response) {
        console.error(
          `🚨 JSON SERVER POST API (Add Product Sell Count API) : ${response.data}`
        )
        return new NextResponse(null, { status: response.status })
      } else {
        console.error(
          `🚨 Unexpected Error (Add Product Sell Count API) : ${error}`
        )
      }

      return new NextResponse(null, { status: 500 })
    }
  }

  await Promise.all(
    checkoutInfo.productList.map((product) => updateProductSellCount(product))
  )

  return NextResponse.json({ status: 200 })
}
