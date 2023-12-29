import { verifyJwt } from "@/features/common/utils/jwt"
import {
  CustomerCounselingDetail,
  GetCustomerCounselingDetailResponse,
} from "@/features/myPage/types/myPage"
import { AxiosError } from "axios"
import { NextRequest, NextResponse } from "next/server"

interface RequestBody {
  writeDetail: CustomerCounselingDetail
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
      `${process.env.NEXT_PUBLIC_DB_URL}/customerCounseling?email=${email}`,
      {
        next: { revalidate: 0 },
      }
    ).then((res) => res.json())

    return NextResponse.json(response[0], { status: 200 })
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get Customer Counseling API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(
      `🚨 Unexpected Error (Get Customer Counseling API) : ${error}`
    )
    return new NextResponse(null, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const accessToken = request.headers.get("authorization")

  if (!accessToken || !verifyJwt(accessToken)) {
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    })
  }

  const email = verifyJwt(accessToken)?.email

  let updatedWriteDetail: CustomerCounselingDetail | undefined
  let customerCounseling: GetCustomerCounselingDetailResponse | undefined
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
    throw new Error("Not Counseling Title or Counseling Content")
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
      throw new Error("Not Checkout Info")
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
      throw new Error("Not product Info")
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

    customerCounseling = response[0]
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER GET API (Get Customer Counseling API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(
      `🚨 Unexpected Error (Get Customer Counseling API) : ${error}`
    )
    return new NextResponse(null, { status: 500 })
  }

  try {
    if (customerCounseling) {
      await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}/customerCounseling/${customerCounseling.id}`,
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
              ...customerCounseling.customerCounselingList,
            ],
          }),
        }
      )

      return NextResponse.json({ status: 200 })
    } else {
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

      return NextResponse.json({ status: 200 })
    }
  } catch (error) {
    const { response } = error as unknown as AxiosError
    if (response) {
      console.error(
        `🚨 JSON SERVER POST API (Create Customer Counseling API) : ${response.data}`
      )
      return new NextResponse(null, { status: response.status })
    }
    console.error(
      `🚨 Unexpected Error (Create Customer Counselling API) : ${error}`
    )
    return new NextResponse(null, { status: 500 })
  }
}
