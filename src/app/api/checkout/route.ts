import { CheckoutList } from "@/common/types/checkout"
import {
  additionalAddressValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"

import { updateAddress } from "@/firebase/firestore/address"
import { addCheckoutList } from "@/firebase/firestore/checkout"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"

import { NextRequest, NextResponse } from "next/server"

// TODO : 유효성 검사 동일하게 진행하기
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

  console.log(isClauseCheck)

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

  const response = await addCheckoutList(email, checkoutInfo)

  return NextResponse.json(response)
}
