import { CheckoutList } from "@/common/types/checkout"

import { updateAddress } from "@/firebase/firestore/address"
import { addCheckoutList } from "@/firebase/firestore/checkout"

import { NextRequest, NextResponse } from "next/server"

// TODO : 유효성 검사 동일하게 진행하기
export async function POST(request: NextRequest) {
  const {
    checkoutInfo,
    email,
    isDefalutAddressCheck,
  }: {
    checkoutInfo: CheckoutList
    email: string
    isDefalutAddressCheck: boolean
  } = await request.json()

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
