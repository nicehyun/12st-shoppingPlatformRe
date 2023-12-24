"use client"

import { parseISOString } from "@/features/checkout/utils/checkout"
import { useGetCustomerCounselingListQuery } from "../../hooks/useGetCustomerCounselingListQuery"
import { getKoreanCsType } from "../../utils/csType"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageListLoading from "../MyPageListLoading"
import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageTableContentEl from "../MyPageTableContentEl"
import { usePagination } from "@/features/common/hooks/usePagination"

const MyPageInquiryCustomerCounselingContentList = () => {
  const { customerCounselingList, isLoading } =
    useGetCustomerCounselingListQuery()

  const perPage = 10
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    customerCounselingList.length
  )

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (customerCounselingList?.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <>
      {customerCounselingList
        ?.slice(listPagination.indexOfFirst, listPagination.indexOfLast)
        .map((customerCounselingEl, index) => (
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

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </>
  )
}

export default MyPageInquiryCustomerCounselingContentList
