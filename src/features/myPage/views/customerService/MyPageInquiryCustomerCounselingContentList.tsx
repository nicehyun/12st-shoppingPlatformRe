"use client"

import { parseISOString } from "@/features/checkout/utils/checkout"
import { useGetCustomerCounselingListQuery } from "../../hooks/useGetCustomerCounselingListQuery"
import { getKoreanCsType } from "../../utils/csType"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageListLoading from "../MyPageListLoading"
import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageTableContentEl from "../MyPageTableContentEl"

const MyPageInquiryCustomerCounselingContentList = () => {
  const { customerCounselingList, isLoading } =
    useGetCustomerCounselingListQuery()

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (customerCounselingList?.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <>
      {customerCounselingList?.map((customerCounselingEl, index) => (
        <MyPageListContentLayout
          key={`customerCounselingList-${customerCounselingEl.csType}-${customerCounselingEl.writeDate}-${index}`}
        >
          <MyPageTableContentEl
            content={getKoreanCsType(customerCounselingEl.csType) ?? ""}
            NoCenter
            className="group-hover:text-lightRed w-1/3 font-semibold"
          />
          <MyPageTableContentEl
            content={customerCounselingEl.counselingTitle}
            NoCenter
            className="truncate-2 group-hover:text-lightRed w-1/2 break-words"
          />
          <MyPageTableContentEl
            className="w-1/3 text-lightBlack"
            content={`${
              parseISOString(customerCounselingEl.writeDate ?? "").year
            }-${parseISOString(customerCounselingEl.writeDate ?? "").month}-${
              parseISOString(customerCounselingEl.writeDate ?? "").date
            }`}
          />

          <MyPageTableContentEl className="w-1/3" content={"N"} />
        </MyPageListContentLayout>
      ))}
    </>
  )
}

export default MyPageInquiryCustomerCounselingContentList
