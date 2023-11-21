"use client"

import { numberToLocaleString } from "@/common/utils/price"
import useGetUseMileAndGetMile from "../../hooks/useGetUseMileAndGetMile"
import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageUseMileAndGetMileContentEl from "./MyPageUseMileAndGetMileContentEl"
import MyPageListLoading from "../MyPageListLoading"

const MyPageGetMileList = () => {
  const { useMileAndGetMileInfo, isLoading } = useGetUseMileAndGetMile()

  const nonZeroGetMileList = useMileAndGetMileInfo?.filter(
    (useMileAndGetMileEl) => useMileAndGetMileEl.getMile !== 0
  )

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (!nonZeroGetMileList?.length)
    return <MyPageListNoneContents content="해당 마일리지 내역이 없습니다." />

  return useMileAndGetMileInfo?.map((useMileAndGetMileEl) => (
    <MyPageUseMileAndGetMileContentEl
      key={`useMileAndGetMileInfo-get-${useMileAndGetMileEl.checkoutNumber}`}
      checkoutDate={useMileAndGetMileEl.checkoutDate}
      checkoutNumber={useMileAndGetMileEl.checkoutNumber}
      mile={`${numberToLocaleString(useMileAndGetMileEl.getMile)} mile`}
    />
  ))
}

export default MyPageGetMileList
