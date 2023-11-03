"use client"

import { useGetCustomerCounselingListQuery } from "../../hooks/useGetCustomerCounselingListQuery"
import { getKoreanCsType } from "../../utils/csType"
import MyPageTableContentEl from "../MyPageTableContentEl"

const MyPageInquiryCustomerCounselingContentList = () => {
  const { customerCounselingList } = useGetCustomerCounselingListQuery()
  console.log(customerCounselingList)

  if (customerCounselingList?.length === 0) {
    return (
      <div className="h-[60px] flexCenter border-b-[1px] border-border text-[14px] sm:text-[12px] md:text-[12px]">
        내역이 없습니다
      </div>
    )
  }

  return (
    <>
      {customerCounselingList?.map((customerCounselingEl, index) => (
        <div
          key={`customerCounselingList-${customerCounselingEl.csType}-${customerCounselingEl}-${index}`}
          className="flex h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border cursor-pointer group"
        >
          <MyPageTableContentEl
            equalParts={4}
            content={getKoreanCsType(customerCounselingEl.csType) ?? ""}
            NoCenter
            className="group-hover:text-lightRed"
          />
          <MyPageTableContentEl
            equalParts={2}
            content={customerCounselingEl.counselingTitle}
            NoCenter
            className="truncate group-hover:text-lightRed"
          />
          <MyPageTableContentEl
            equalParts={4}
            content={`${customerCounselingEl.writeDate?.year}-${customerCounselingEl.writeDate?.month}-${customerCounselingEl.writeDate?.date}`}
          />

          <MyPageTableContentEl equalParts={4} content={"N"} />
        </div>
      ))}
    </>
  )
}

export default MyPageInquiryCustomerCounselingContentList
