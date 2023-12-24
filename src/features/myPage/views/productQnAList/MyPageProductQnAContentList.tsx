"use client"

import React from "react"
import { useGetCustomerCounselingListQuery } from "../../hooks/useGetCustomerCounselingListQuery"
import MyPageListLoading from "../MyPageListLoading"
import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageTableContentEl from "../MyPageTableContentEl"
import { getKoreanCsType } from "../../utils/csType"
import { parseISOString } from "@/features/checkout/utils/checkout"

const MyPageProductQnAContentList = () => {
  const { customerCounselingList, isLoading } =
    useGetCustomerCounselingListQuery()

  if (isLoading) {
    return <MyPageListLoading />
  }

  const productQnAList = customerCounselingList.filter(
    (productQnA) => productQnA.csType === "product"
  )

  if (productQnAList?.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <>
      {productQnAList?.map((productQnAEl, index) => (
        <MyPageListContentLayout
          key={`customerCounselingList-${productQnAEl.csType}-${productQnAEl.writeDate}-${index}`}
        >
          <MyPageTableContentEl
            content={productQnAEl.productName}
            NoCenter
            className="truncate-2 group-hover:text-lightRed w-1/4 break-words font-semibold pr-[20px]"
          />
          <MyPageTableContentEl
            content={productQnAEl.counselingTitle}
            NoCenter
            className="truncate-2 group-hover:text-lightRed w-1/4 break-words"
          />
          <MyPageTableContentEl
            className="w-1/4 text-lightBlack"
            content={`${parseISOString(productQnAEl.writeDate ?? "").year}-${
              parseISOString(productQnAEl.writeDate ?? "").month
            }-${parseISOString(productQnAEl.writeDate ?? "").date}`}
          />

          <MyPageTableContentEl className="w-1/4" content={"N"} />
        </MyPageListContentLayout>
      ))}
    </>
  )
}

export default MyPageProductQnAContentList
