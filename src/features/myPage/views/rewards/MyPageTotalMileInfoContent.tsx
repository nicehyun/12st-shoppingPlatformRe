"use client"

import { numberToLocaleString } from "@/common/utils/price"
import useGetUseMileAndGetMile from "../../hooks/useGetUseMileAndGetMile"
import MyPageTableContentEl from "../MyPageTableContentEl"

const MyPageTotalMileInfoContent = () => {
  const { userMile, totalGetMile, totalUseMile } = useGetUseMileAndGetMile()
  return (
    <div
      className={`flex h-[60px] text-[14px] sm:text-[12px] md:text-[12px] border-b-[1px] border-border`}
    >
      <MyPageTableContentEl
        equalParts={3}
        content={`${numberToLocaleString(userMile ?? 0)} mile`}
      />
      <MyPageTableContentEl
        equalParts={3}
        content={`${numberToLocaleString(totalGetMile ?? 0)} mile`}
      />
      <MyPageTableContentEl
        equalParts={3}
        content={`${numberToLocaleString(totalUseMile ?? 0)} mile`}
      />
    </div>
  )
}

export default MyPageTotalMileInfoContent
