import {
  emailValidator,
  nameValidator,
} from "@/features/auth/signUp/utils/validation"
import { myPageAPI } from "@/features/myPage/models/myPageAPI"
import {
  CustomerCounselingDetail,
  CustomerCounselingUserInfo,
} from "@/features/myPage/types/myPage"

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

  let updatedWriteDetail: CustomerCounselingDetail

  if (checkoutRelationRadioValueList.includes(csType)) {
    if (
      ![
        !!checkoutNumber,
        !!checkoutProductName,
        !!checkoutDate,
        !!checkoutPayment?.selectedPayment,
      ].every((checkoutRelationCsValidEl) => checkoutRelationCsValidEl)
    ) {
      return
    }

    updatedWriteDetail = {
      csType,
      counselingContent,
      counselingTitle,
      checkoutDate,
      checkoutNumber,
      checkoutPayment,
    }
  }

  if (csType === "product") {
    if (
      ![!!productName, !!productPrice].every(
        (productRelationCsValidEl) => productRelationCsValidEl
      )
    ) {
      return
    }

    updatedWriteDetail = {
      csType,
      counselingContent,
      counselingTitle,
      productName,
      productPrice,
    }
  }

  if (
    ![!!counselingTitle, !!counselingContent].every(
      (commonValidEl) => commonValidEl
    )
  ) {
    return
  } else {
    updatedWriteDetail = {
      csType,
      counselingContent,
      counselingTitle,
    }
  }

  let response
  try {
    await myPageAPI.writeCoustomerCounseling(userInfo, updatedWriteDetail)

    response = { result: "success" }
  } catch (error) {
    throw error
  }

  return NextResponse.json(response)
}
