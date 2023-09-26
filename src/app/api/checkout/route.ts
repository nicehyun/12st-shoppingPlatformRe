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

import { updateAddress } from "@/firebase/firestore/address"
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
  }: {
    checkoutInfo: CheckoutList
    email: string
    isDefalutAddressCheck: boolean
    isClauseCheck: Omit<CheckoutClauseCheck, "all">
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

  if (isDefalutAddressCheck) {
    await updateAddress(email, {
      additionalAddress: checkoutInfo.additionalAddress,
      address: checkoutInfo.address,
      zipcode: checkoutInfo.zipcode,
    })
  }

  let response

  try {
    const totalPrice = accumulationOfProductsPrice(checkoutInfo.prductList)
    await addCheckoutList(email, {
      ...checkoutInfo,
      getMile: junkOfNoMoreThanOneDigit(totalPrice * 0.02),
    })

    await checkoutUseMile(email, checkoutInfo.useMile)

    await checkoutGetMile(email, totalPrice - checkoutInfo.useMile)

    response = { result: "success" }
  } catch (error) {
    return
  }

  return NextResponse.json(response)
}
