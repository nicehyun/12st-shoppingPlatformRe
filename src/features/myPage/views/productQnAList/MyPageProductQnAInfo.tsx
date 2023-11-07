import React from "react"
import MyPageSectionSubTitle from "../MyPageSectionSubTitle"
import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageProductQnAListContent from "./MyPageProductQnAListContent"

const MyPageProductQnAInfo = () => {
  return (
    <MyPageSectionSubTitle subtitle="상품 Q&A 내역" className="mt-[50px]">
      <div className="flex border-t-[1px] font-extrabold border-b-border dark:border-white border-b-[1px] h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px]">
        <MyPageTableHeaderEl headerContent="상품번호" equalParts={4} isStart />
        <MyPageTableHeaderEl
          headerContent="문의내용"
          equalParts={2}
          isStart
          className="ml-[10px]"
        />

        <MyPageTableHeaderEl headerContent="작성일" equalParts={4} />
        <MyPageTableHeaderEl headerContent="답변유무" equalParts={4} />
      </div>

      <MyPageProductQnAListContent />
    </MyPageSectionSubTitle>
  )
}

export default MyPageProductQnAInfo
