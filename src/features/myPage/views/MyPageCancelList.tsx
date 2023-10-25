"use client"

import { useState } from "react"
import { CancelType } from "../types/myPage"
import MyPageCancelHeaderEl from "./MyPageCancelHeaderEl"
import MyPageCancelListController from "./MyPageCancelListController"

const MyPageCancelList = () => {
  const [selectedCancelType, setSelectedCancelType] =
    useState<CancelType>("all")

  console.log(selectedCancelType)
  const handleCancelTypeChange = (cancelType: CancelType) => {
    setSelectedCancelType(cancelType)
  }

  const cancelHeaderList = [
    { title: "CS구분", id: "CSType" },
    { title: "주문번호", id: "checkoutNumber" },
    { title: "제목", id: "content" },
    { title: "접수", id: "submisstionDate" },
    { title: "진행", id: "phase" },
    { title: "완료", id: "completeDate" },
  ]

  return (
    <div>
      <header className="flex justify-between border-b-black border-b-[4px] dark:border-b-white pb-[20px]">
        <h3 className="text-[24px] sm:text-[18px] md:text-[18px] font-bold">
          취소/반품/교환 내역
        </h3>
        <MyPageCancelListController
          cancelTypeState={selectedCancelType}
          onChangeCancelType={handleCancelTypeChange}
        />
      </header>

      <div className="border-b-border border-b-[1px] dark:border-b-lightBlack">
        <div className="h-[60px] md:h-[50px] flex justify-between border-b-black dark:border-white border-b-[1px] text-[14px] sm:text-[12px] md:text-[12px] font-semibold">
          {cancelHeaderList.map((headerEl, index) => (
            <MyPageCancelHeaderEl
              key={headerEl.id}
              content={headerEl.title}
              className={`${index === 2 ? "w-1/2" : ""} ${
                index !== 0 ? "ml-[10px]" : ""
              }`}
            />
          ))}
        </div>

        <div className="flexCenter h-[100px] font-bold text-[18px]">
          취소/반품/교환 내역이 없습니다
        </div>
      </div>
    </div>
  )
}

export default MyPageCancelList
