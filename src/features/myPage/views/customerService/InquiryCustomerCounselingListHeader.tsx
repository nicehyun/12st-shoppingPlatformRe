import React from "react"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageListTableHeader from "../MyPageListTableHeader"

const InquiryCustomerCounselingListHeader = () => {
  return (
    <MyPageListTableHeader>
      <MyPageTableHeaderEl headerContent="CS구분" className="w-1/3" isStart />
      <MyPageTableHeaderEl headerContent="문의내용" className="w-1/2" isStart />

      <MyPageTableHeaderEl headerContent="작성일" className="w-1/3" />
      <MyPageTableHeaderEl headerContent="답변유무" className="w-1/3" />
    </MyPageListTableHeader>
  )
}

export default InquiryCustomerCounselingListHeader
