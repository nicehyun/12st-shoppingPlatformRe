import { addressAPI } from "@/common/models/addressAPI"
import { mileAPI } from "@/common/models/mileAPI"
import { CheckoutList } from "@/common/types/checkout"
import {
  accumulationOfProductsPrice,
  junkOfNoMoreThanOneDigit,
} from "@/common/utils/price"
import {
  additionalAddressValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
} from "@/features/auth/signUp/utils/validation"
import { checkoutAPI } from "@/features/checkout/models/checkoutAPI"
import { myPageAPI } from "@/features/myPage/models/myPageAPI"
import {
  CustomerCounselingDetail,
  CustomerCounselingUserInfo,
} from "@/features/myPage/types/myPage"
import { CheckoutClauseCheck } from "@/redux/features/checkoutSlice"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const {
    userInfo,
    writeDetail,
  }: {
    userInfo: CustomerCounselingUserInfo
    writeDetail: CustomerCounselingDetail
  } = await request.json()

  const { email, name } = userInfo

  const {
    counselingContent,
    counselingTitle,
    csType,
    checkoutDate,
    checkoutNumber,
    checkoutPayment,
    checkoutProductName,
    productName,
    productPrice,
  } = writeDetail

  const checkoutRelationRadioValueList = [
    "delivery",
    "checkout",
    "cancel",
    "return",
    "change",
    "refund",
    "deposit",
  ]

  if (!nameValidator(name)) return
  if (!emailValidator(email)) return

  if (checkoutRelationRadioValueList.includes(csType)) {
    if (
      ![
        !!checkoutNumber,
        !!checkoutProductName,
        !!checkoutDate,
        !!checkoutPayment?.selectedPayment,
      ].every((checkoutRelationCsValidEl) => checkoutRelationCsValidEl)
    ) {
      console.log(1)
      return
    }
  }

  if (csType === "product") {
    if (
      ![!!productName, !!productPrice].every(
        (productRelationCsValidEl) => productRelationCsValidEl
      )
    ) {
      console.log(2)
      return
    }
  }

  if (
    ![!!counselingTitle, !!counselingContent].every(
      (commonValidEl) => commonValidEl
    )
  ) {
    console.log(3)
    return
  }

  let response

  try {
    await myPageAPI.writeCoustomerCounseling(userInfo, writeDetail)

    response = { result: "success" }
  } catch (error) {
    throw error
  }

  return NextResponse.json(response)
}
