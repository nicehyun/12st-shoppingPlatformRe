import { addressAPI } from "@/features/common/models/deliveryInfo"
import { mileAPI } from "@/features/common/models/mileAPI"
import { CheckoutList } from "@/features/common/types/checkout"
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

export async function POST(request: NextRequest) {
  const {
    checkoutInfo,
    email,
    isClauseCheck,
    isUpdateDeliveryInfo,
  }: {
    checkoutInfo: CheckoutList
    email: string
    isClauseCheck: Omit<CheckoutClauseCheck, "all">
    isUpdateDeliveryInfo: boolean
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

  try {
    if (isUpdateDeliveryInfo) {
      await addressAPI.updateDefalutDeliveryInfo(email, {
        deliveryName: checkoutInfo.deliveryName,
        recipient: checkoutInfo.recipient,
        additionalAddress: checkoutInfo.additionalAddress,
        address: checkoutInfo.address,
        zipcode: checkoutInfo.zipcode,
        phone1: checkoutInfo.phone1,
        phone2: checkoutInfo.phone2,
      })
    }

    const totalPrice = accumulationOfProductsPrice(checkoutInfo.productList)
    await checkoutAPI.addCheckoutList(email, {
      ...checkoutInfo,
      getMile: junkOfNoMoreThanOneDigit(totalPrice * 0.01),
    })

    await mileAPI.checkoutUseMile(email, checkoutInfo.useMile)

    await mileAPI.checkoutGetMile(email, totalPrice - checkoutInfo.useMile)

    response = { result: "success" }
  } catch (error) {
    throw error
  }

  return NextResponse.json(response)
}
