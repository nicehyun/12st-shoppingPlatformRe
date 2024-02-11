"use client"

import MyPageListNoneContents from "../MyPageListNoneContents"
import { useInquiryCustomerCounselingPagination } from "../../hooks/useInquiryCustomerCounselingPagination"
import CustomPagination from "@/features/common/views/CustomPagination"
import InquiryCustomerCounselingContent from "./InquiryCustomerCounselingContent"
import SkeletonInquiryCustomerCounselingContentList from "./SkeletonInquiryCustomerCounselingContentList"

const InquiryCustomerCounselingContentList = () => {
  const {
    currentPage,
    handlePageChange,
    isLoading,
    paginationCount,
    renderCustomerCounselingList,
  } = useInquiryCustomerCounselingPagination()

  if (isLoading) {
    return <SkeletonInquiryCustomerCounselingContentList />
  }

  if (renderCustomerCounselingList?.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <>
      {renderCustomerCounselingList.map((customerCounselingEl, index) => (
        <InquiryCustomerCounselingContent
          customerCounseling={customerCounselingEl}
          key={`customerCounselingList-${customerCounselingEl.csType}-${customerCounselingEl.writeDate}-${index}`}
        />
      ))}

      <CustomPagination
        page={currentPage}
        count={paginationCount}
        onChange={handlePageChange}
        className="mt-[30px]"
      />
    </>
  )
}

export default InquiryCustomerCounselingContentList
