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
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"
import { NextRequest, NextResponse } from "next/server"
import { verifyJwt } from "@/features/common/utils/jwt"
import { AxiosError } from "axios"
import { formatCheckoutNumber } from "@/features/checkout/utils/checkout"
import { GetCartResponse } from "@/features/cart/types/cart"
import { Product } from "@/features/common/types/product"
import { GetDeliveryInfoResponse } from "@/features/common/types/deliveryInfo"
import { UserInfoWithMile } from "@/features/common/types/user"

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

    const checkoutData: GetCheckoutListResponse = response[0]

    return NextResponse.json(checkoutData?.checkoutList, { status: 200 })
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
  const userId = verifyJwt(accessToken)?.id

  const { checkoutInfo, isClauseCheck, isUpdateDeliveryInfo }: RequestBody =
    await request.json()

  if (!nameValidator(checkoutInfo.recipient)) {
    throw new Error(`🚨 The recipient name is invalid!`)
  }
  if (!checkoutInfo.zipcode) {
    throw new Error(`🚨 The zipcode is invalid!`)
  }
  if (!checkoutInfo.address) {
    throw new Error(`🚨 The address is invalid!`)
  }
  if (!additionalAddressValidator(checkoutInfo.additionalAddress)) {
    throw new Error(`🚨 The additional address is invalid!`)
  }
  if (!phoneValidator(checkoutInfo.phone1)) {
    throw new Error(`🚨 The phone number is invalid!`)
  }

  const totalPrice = accumulationOfProductsPrice(checkoutInfo.productList)
  const getMile = junkOfNoMoreThanOneDigit(
    (totalPrice - checkoutInfo.useMile) * 0.01
  )
  const useMile = checkoutInfo.useMile

  const getUserInfoResponse: UserInfoWithMile[] = await fetch(
    `${process.env.NEXT_PUBLIC_DB_URL}/users?email=${email}`,
    {
      next: { revalidate: 0 },
    }
  ).then((res) => res.json())

  const userMile = getUserInfoResponse[0].mile

  const updatedMile = userMile + getMile - useMile

  if (userMile < useMile) {
    throw new Error(
      `🚨 The mileage you are trying to use exceeds the available mileage!`
    )
  }

  if (
    checkoutInfo.payment.selectedPayment === "credit" &&
    !checkoutInfo.payment.creditName
  ) {
    throw new Error(
      `🚨 Credit card information is required when selecting 'credit' payment method!`
    )
  }

  if (
    !isClauseCheck.collectionOfUserInfo ||
    !isClauseCheck.paymentAgency ||
    !isClauseCheck.provisionOfUserInfo
  ) {
    throw new Error(`🚨 Purchase agreements must be checked before proceeding!`)
  }

  const updateDeliveryInfo = {
    deliveryName: checkoutInfo.deliveryName,
    recipient: checkoutInfo.recipient,
    additionalAddress: checkoutInfo.additionalAddress,
    address: checkoutInfo.address,
    zipcode: checkoutInfo.zipcode,
    phone1: checkoutInfo.phone1,
    phone2: checkoutInfo.phone2,
  }

  const updateDeliveryInfoPromise = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    const deliveryInfo: GetDeliveryInfoResponse = response[0]

    if (!deliveryInfo) {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          deliveryInfo: updateDeliveryInfo,
        }),
      })
    } else {
      await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/deliveryInfo/${deliveryInfo.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            deliveryInfo: updateDeliveryInfo,
          }),
        }
      )
    }
  }

  const updateCheckoutPromise = async () => {
    const getCheckoutResponse: GetCheckoutListResponse[] = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/checkout?email=${email}`,
      { next: { revalidate: 0 } }
    ).then((res) => res.json())

    const prevCheckoutList = getCheckoutResponse[0].checkoutList

    const checkoutDate = new Date().toISOString()
    const updatedCheckoutList = {
      ...checkoutInfo,
      getMile,
      checkoutDate,
      checkoutNumber: formatCheckoutNumber(checkoutDate),
    }

    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/checkout/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checkoutList: [updatedCheckoutList, ...prevCheckoutList],
      }),
    })
  }

  const updateCartPromise = async () => {
    const getCartResponse: GetCartResponse[] = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/cart?email=${email}`,
      { next: { revalidate: 0 } }
    ).then((res) => res.json())

    const productListInCart = getCartResponse[0].productList
    const updatedProductInCart = productListInCart.filter((cartProduct) => {
      return !checkoutInfo.productList.some(
        (product) => product.id === cartProduct.id
      )
    })

    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/cart/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productList: updatedProductInCart,
      }),
    })
  }

  const updateMilePromise = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mile: updatedMile,
      }),
    })
  }

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

  try {
    if (isUpdateDeliveryInfo) {
      await Promise.all([
        updateDeliveryInfoPromise(),
        updateCheckoutPromise(),
        updateCartPromise(),
        updateMilePromise(),
        ...checkoutInfo.productList.map((product) =>
          updateProductSellCount(product)
        ),
      ])
    } else {
      await Promise.all([
        updateCheckoutPromise(),
        updateCartPromise(),
        updateMilePromise(),
        ...checkoutInfo.productList.map((product) =>
          updateProductSellCount(product)
        ),
      ])
    }

    return NextResponse.json({ status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(`🚨 JSON SERVER POST API - Checkout : ${response.data}`)
      return new NextResponse(null, { status: response.status })
    }
    console.error(`🚨 Unexpected Error - Checkout : ${error}`)
    return new NextResponse(null, { status: 500 })
  }
}
