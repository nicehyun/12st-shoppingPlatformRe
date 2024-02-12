import { verifyAccessToken } from "@/features/common/utils/jwt"
import { CustomerCounselingDetail } from "@/features/myPage/types/myPage"
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

  const email = verifyAccessToken(accessToken)?.email
  const id = verifyAccessToken(accessToken)?.id

  let updatedWriteDetail: CustomerCounselingDetail | undefined

  const { writeDetail }: RequestBody = await request.json()

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

  const genernalRelationRadioValueListWithoutProduct = [
    "userInfo",
    "payment",
    "couponAndMile",
  ]

  const etcRelationRadioValueList = ["system", "etc"]

  if (
    ![!!counselingTitle, !!counselingContent].every(
      (commonValidEl) => commonValidEl
    )
  ) {
    return NextResponse.json({
      status: 401,
      error: "문의 제목과 내용을 작성해주세요",
    })
  }

  if (checkoutRelationRadioValueList.includes(csType)) {
    if (
      ![
        !!checkoutNumber,
        !!checkoutProductName,
        !!checkoutDate,
        !!checkoutPayment?.selectedPayment,
      ].every((checkoutRelationCsValidEl) => checkoutRelationCsValidEl)
    ) {
      return NextResponse.json({
        status: 401,
        error: "구매 정보가 필요합니다.",
      })
    }

    updatedWriteDetail = {
      csType,
      counselingContent,
      counselingTitle,
      checkoutDate,
      checkoutNumber,
      checkoutProductName,
      checkoutPayment,
    } as CustomerCounselingDetail
  }

  if (csType === "product") {
    if (
      ![!!productName, !!productPrice].every(
        (productRelationCsValidEl) => productRelationCsValidEl
      )
    ) {
      return NextResponse.json({
        status: 401,
        error: "상품번호를 조회해주세요.",
      })
    }

    updatedWriteDetail = {
      csType,
      counselingContent,
      counselingTitle,
      productName,
      productPrice,
    } as CustomerCounselingDetail
  }

  if (
    genernalRelationRadioValueListWithoutProduct.includes(csType) ||
    etcRelationRadioValueList.includes(csType)
  ) {
    updatedWriteDetail = {
      csType,
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
