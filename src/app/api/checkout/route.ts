import { CheckoutList } from "@/common/types/checkout"
import {
  accumulationOfProductsPrice,
  junkOfNoMoreThanOneDigit,
} from "@/common/utils/price"
import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"
import { updateDefalutDeliveryInfo } from "@/firebase/firestore/address"

import { addCheckoutList } from "@/firebase/firestore/checkout"
import { checkoutGetMile, checkoutUseMile } from "@/firebase/firestore/mile"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"

import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const {
    checkoutInfo,
    email,
    isDefalutAddressCheck,
    isClauseCheck,
    deliveryInfoTabValue,
  }: {
    checkoutInfo: CheckoutList
    email: string
    isDefalutAddressCheck: boolean
    isClauseCheck: Omit<CheckoutClauseCheck, "all">
    deliveryInfoTabValue: "0" | "1"
  } = await request.json()

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

  let response

  const text = {
    delivertName: checkoutInfo.deliveryName,
    recipient: checkoutInfo.recipient,
    additionalAddress: checkoutInfo.additionalAddress,
    address: checkoutInfo.address,
    zipcode: checkoutInfo.zipcode,
    phone1: checkoutInfo.phone1,
    phone2: checkoutInfo.phone2,
  }

  try {
    if (deliveryInfoTabValue === "0") {
      await updateDefalutDeliveryInfo(email, {
        delivertName: checkoutInfo.deliveryName,
        recipient: checkoutInfo.recipient,
        additionalAddress: checkoutInfo.additionalAddress,
        address: checkoutInfo.address,
        zipcode: checkoutInfo.zipcode,
        phone1: checkoutInfo.phone1,
        phone2: checkoutInfo.phone2,
      })
    }

    if (deliveryInfoTabValue === "1" && isDefalutAddressCheck) {
      await updateDefalutDeliveryInfo(email, {
        delivertName: checkoutInfo.deliveryName,
        recipient: checkoutInfo.recipient,
        additionalAddress: checkoutInfo.additionalAddress,
        address: checkoutInfo.address,
        zipcode: checkoutInfo.zipcode,
        phone1: checkoutInfo.phone1,
        phone2: checkoutInfo.phone2,
      })
    }

    const totalPrice = accumulationOfProductsPrice(checkoutInfo.prductList)
    await addCheckoutList(email, {
      ...checkoutInfo,
      getMile: junkOfNoMoreThanOneDigit(totalPrice * 0.01),
    })

    await checkoutUseMile(email, checkoutInfo.useMile)

    await checkoutGetMile(email, totalPrice - checkoutInfo.useMile)

    response = { result: "success" }
  } catch (error) {
    throw error
  }

  return NextResponse.json(response)
}
