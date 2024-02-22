import { validCheckFromCheckoutFormEvent } from "@/features/checkout/models/validCheck"
import { verifyAccessToken } from "@/features/common/utils/jwt"
import {
  parseCSTypeFromFormData,
  parseCheckoutInfoFromFormData,
  parseCounselingContentFromFormData,
  parsePaymentString,
  parseProductInfoFromFormData,
} from "@/features/myPage/models/formData"
import { validCheckCounSelingWrite } from "@/features/myPage/models/validCheck"
import {
  CsType,
  CustomerCounselingDetail,
} from "@/features/myPage/types/myPage"
import { NextRequest, NextResponse } from "next/server"

interface RequestBody {
  writeDetail: CustomerCounselingDetail
}

export async function GET(request: Request) {
  const accessToken = request.headers.get("authorization")
  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const email = verifyAccessToken(accessToken)?.email

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/customerCounseling?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    if (response[0] === undefined) {
      return NextResponse.json([], { status: 200 })
    } else {
      return NextResponse.json(response[0].customerCounselingList, {
        status: 200,
      })
    }
  } catch (error: unknown) {
    throw error
  }
}

export async function POST(request: NextRequest) {
  const accessToken = request.headers.get("authorization")
  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

  const formData = await request.formData()

  const { valid, message } = validCheckCounSelingWrite(formData)

  if (!valid) {
    return NextResponse.json({
      status: 401,
      error: message,
    })
  }

  const email = verifyAccessToken(accessToken)?.email
  const id = verifyAccessToken(accessToken)?.id

  let updatedWriteDetail: CustomerCounselingDetail | undefined

  const { counselingContent, counselingTitle } =
    parseCounselingContentFromFormData(formData)
  const { productName, productPrice } = parseProductInfoFromFormData(formData)
  const { checkoutDate, checkoutNumber, checkoutPayment, checkoutProductName } =
    parseCheckoutInfoFromFormData(formData)
  const { selectedCsType } = parseCSTypeFromFormData(formData)

  if (
    [
      "delivery",
      "checkout",
      "cancel",
      "return",
      "change",
      "refund",
      "deposit",
    ].includes(selectedCsType)
  ) {
    updatedWriteDetail = {
      csType: selectedCsType,
      counselingContent,
      counselingTitle,
      checkoutDate,
      checkoutNumber,
      checkoutProductName,
      checkoutPayment: parsePaymentString(checkoutPayment),
    } as CustomerCounselingDetail
  }

  if (selectedCsType === "product") {
    updatedWriteDetail = {
      csType: selectedCsType,
      counselingContent,
      counselingTitle,
      productName,
      productPrice: +productPrice,
    } as CustomerCounselingDetail
  }

  if (
    ["userInfo", "payment", "couponAndMile", "system", "etc"].includes(
      selectedCsType
    )
  ) {
    updatedWriteDetail = {
      csType: selectedCsType,
      counselingContent,
      counselingTitle,
    } as CustomerCounselingDetail
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DB_URL}/customerCounseling?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    if (response[0] === undefined) {
      await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/customerCounseling`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          id,
          customerCounselingList: [
            {
              ...updatedWriteDetail,
              writeDate: new Date().toISOString(),
            },
          ],
        }),
      })
    } else {
      await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/customerCounseling/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerCounselingList: [
              {
                ...updatedWriteDetail,
                writeDate: new Date().toISOString(),
              },
              ...response[0].customerCounselingList,
            ],
          }),
        }
      )
    }

    return NextResponse.json({ status: 200 })
  } catch (error: unknown) {
    throw error
  }
}
