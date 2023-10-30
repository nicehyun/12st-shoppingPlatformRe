"use client"

import { numberToLocaleString } from "@/common/utils/price"
import React from "react"
import useGetUseMileAndGetMile from "../../hooks/useGetUseMileAndGetMile"
import MyPageTableHeaderEl from "../MyPageTableHeaderEl"
import MyPageNoneMileContent from "./MyPageNoneMileContent"
import MyPageUseMileAndGetMileContentEl from "./MyPageUseMileAndGetMileContentEl"

interface IMyPageMileTebPanel {
  mileType: "get" | "use"
}

const MyPageMileTebPanel = ({ mileType }: IMyPageMileTebPanel) => {
  const { useMileAndGetMileInfo } = useGetUseMileAndGetMile()

  const renderUseMileContent = () => {
    const nonZeroUseMileList = useMileAndGetMileInfo?.filter(
      (useMileAndGetMileEl) => useMileAndGetMileEl.useMile !== 0
    )

    if (!nonZeroUseMileList?.length) return <MyPageNoneMileContent />

    return useMileAndGetMileInfo?.map((useMileAndGetMileEl) => (
      <MyPageUseMileAndGetMileContentEl
        key={`useMileAndGetMileInfo-use-${useMileAndGetMileEl.checkoutNumber}`}
        checkoutDate={useMileAndGetMileEl.checkoutDate}
        checkoutNumber={useMileAndGetMileEl.checkoutNumber}
        mile={`${numberToLocaleString(useMileAndGetMileEl.useMile)} mile`}
      />
    ))
  }

  const renderGetMileContent = () => {
    return useMileAndGetMileInfo?.map((useMileAndGetMileEl) => (
      <MyPageUseMileAndGetMileContentEl
        key={`useMileAndGetMileInfo-get-${useMileAndGetMileEl.checkoutNumber}`}
        checkoutDate={useMileAndGetMileEl.checkoutDate}
        checkoutNumber={useMileAndGetMileEl.checkoutNumber}
        mile={`${numberToLocaleString(useMileAndGetMileEl.getMile)} mile`}
      />
    ))
  }

  return (
    <>
      <div className="flex font-extrabold h-[60px] md:h-[50px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border ">
        <MyPageTableHeaderEl equalParts={3} headerContent="적립일자" />
        <MyPageTableHeaderEl
          equalParts={3}
          headerContent={
            mileType === "get"
              ? "적립마일리지"
              : mileType === "use"
              ? "사용마일리지"
              : ""
          }
        />
        <MyPageTableHeaderEl equalParts={3} headerContent="관련주문번호" />
      </div>
      {mileType === "use" && renderUseMileContent()}
      {mileType === "get" && renderGetMileContent()}
    </>
  )
}

export default MyPageMileTebPanel
