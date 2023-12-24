"use client"

import { numberToLocaleString } from "@/features/common/utils/price"

import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageListContentLayout from "../MyPageListContentLayout"
import MyPageListLoading from "../MyPageListLoading"
import { useGetUseMileAndGetMile } from "../../hooks/useGetUseMileAndGetMile"

const MyPageTotalMileInfoContent = () => {
  const { userMile, totalGetMile, totalUseMile, isLoading } =
    useGetUseMileAndGetMile()

  if (isLoading) {
    return <MyPageListLoading />
  }

  return (
    <MyPageListContentLayout>
      <MyPageTableContentEl
        className="w-1/3"
        content={`${numberToLocaleString(userMile ?? 0)} mile`}
      />
      <MyPageTableContentEl
        className="w-1/3"
        content={`${numberToLocaleString(totalGetMile ?? 0)} mile`}
      />
      <MyPageTableContentEl
        className="w-1/3"
        content={`${numberToLocaleString(totalUseMile ?? 0)} mile`}
      />
    </MyPageListContentLayout>
  )
}

export default MyPageTotalMileInfoContent
