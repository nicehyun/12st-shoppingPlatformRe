import React from "react"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageTableContentEl from "../MyPageTableContentEl"
import { parseISOString } from "@/features/checkout/models/checkout"
import { CustomerCounselingDetail } from "../../types/myPage"
import { getKoreanCsType } from "../../models/csType"

interface IInquiryCustomerCounselingContent {
  customerCounseling: CustomerCounselingDetail
}

const InquiryCustomerCounselingContent = ({
  customerCounseling,
}: IInquiryCustomerCounselingContent) => {
  return (
    <MyPageListContentLayout>
      <MyPageTableContentEl
        content={getKoreanCsType(customerCounseling.csType) ?? ""}
        NoCenter
        className="group-hover:text-lightRed w-1/3 font-semibold"
      />
      <MyPageTableContentEl
        content={customerCounseling.counselingTitle}
        NoCenter
        className="truncate-2 group-hover:text-lightRed w-1/2 break-words"
      />
      <MyPageTableContentEl
        className="w-1/3 text-lightBlack"
        content={`${parseISOString(customerCounseling.writeDate ?? "").year}-${
          parseISOString(customerCounseling.writeDate ?? "").month
        }-${parseISOString(customerCounseling.writeDate ?? "").date}`}
      />

      <MyPageTableContentEl className="w-1/3" content={"N"} />
    </MyPageListContentLayout>
  )
}

export default InquiryCustomerCounselingContent
