"use client"

import { numberToLocaleString } from "@/features/common/utils/price"

import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageUseMileAndGetMileContentEl from "./MyPageUseMileAndGetMileContentEl"
import MyPageListLoading from "../MyPageListLoading"
import { useGetUseMileAndGetMile } from "../../hooks/useGetUseMileAndGetMile"

const MyPageUseMileList = () => {
  const { useMileAndGetMileInfo, isLoading } = useGetUseMileAndGetMile()

  const nonZeroUseMileList = useMileAndGetMileInfo?.filter(
    (useMileAndGetMileEl) => useMileAndGetMileEl.useMile !== 0
  )

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (!nonZeroUseMileList?.length)
    return <MyPageListNoneContents content="해당 마일리지 내역이 없습니다." />

  return nonZeroUseMileList?.map((useMileAndGetMileEl) => (
    <MyPageUseMileAndGetMileContentEl
      key={`useMileAndGetMileInfo-use-${useMileAndGetMileEl.checkoutNumber}`}
      checkoutDate={useMileAndGetMileEl.checkoutDate}
      checkoutNumber={useMileAndGetMileEl.checkoutNumber}
      mile={`${numberToLocaleString(useMileAndGetMileEl.useMile)} mile`}
    />
  ))
}

export default MyPageUseMileList
