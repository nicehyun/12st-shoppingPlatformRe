"use client"

import { numberToLocaleString } from "@/features/common/utils/price"

import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageUseMileAndGetMileContentEl from "./MyPageUseMileAndGetMileContentEl"
import MyPageListLoading from "../MyPageListLoading"
import { useGetUseMileAndGetMile } from "../../hooks/useGetUseMileAndGetMile"
import { usePagination } from "@/features/common/hooks/usePagination"

const MyPageUseMileList = () => {
  const { useMileAndGetMileInfo, isLoading } = useGetUseMileAndGetMile()

  const nonZeroUseMileList = useMileAndGetMileInfo?.filter(
    (useMileAndGetMileEl) => useMileAndGetMileEl.useMile !== 0
  )

  const perPage = 10
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    nonZeroUseMileList.length
  )

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (!nonZeroUseMileList?.length)
    return <MyPageListNoneContents content="해당 마일리지 내역이 없습니다." />

  return (
    <>
      {nonZeroUseMileList
        ?.slice(listPagination.indexOfFirst, listPagination.indexOfLast)
        .map((useMileAndGetMileEl) => (
          <MyPageUseMileAndGetMileContentEl
            key={`useMileAndGetMileInfo-use-${useMileAndGetMileEl.checkoutNumber}`}
            checkoutDate={useMileAndGetMileEl.checkoutDate}
            checkoutNumber={useMileAndGetMileEl.checkoutNumber}
            mile={`${numberToLocaleString(useMileAndGetMileEl.useMile)} mile`}
          />
        ))}

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </>
  )
}

export default MyPageUseMileList
