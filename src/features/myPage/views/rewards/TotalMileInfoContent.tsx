"use client"

import { numberToLocaleString } from "@/features/common/utils/price"
import MyPageTableContentEl from "../MyPageTableContentEl"
import MyPageListContentLayout from "../MyPageListContentLayout"
import { useGetUseMileAndGetMile } from "../../hooks/useGetUseMileAndGetMile"
import SkeletonTotalMileContent from "./SkeletonMileContent"

const TotalMileInfoContent = () => {
  const { userMile, totalGetMile, totalUseMile, isLoading } =
    useGetUseMileAndGetMile()

  if (isLoading) {
    return <SkeletonTotalMileContent />
  }

  const fommatedUserMile = userMile
    ? `${numberToLocaleString(userMile ?? 0)} mile`
    : `0 mile`

  const fommatedTotalGetMile = totalGetMile
    ? `${numberToLocaleString(totalGetMile ?? 0)} mile`
    : `0 mile`

  const fommatedTotalUseMile = totalUseMile
    ? `${numberToLocaleString(totalUseMile ?? 0)} mile`
    : `0 mile`

  return (
    <MyPageListContentLayout>
      <MyPageTableContentEl className="w-1/3" content={fommatedUserMile} />
      <MyPageTableContentEl className="w-1/3" content={fommatedTotalGetMile} />
      <MyPageTableContentEl className="w-1/3" content={fommatedTotalUseMile} />
    </MyPageListContentLayout>
  )
}

export default TotalMileInfoContent
