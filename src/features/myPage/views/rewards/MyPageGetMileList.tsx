"use client"

import { numberToLocaleString } from "@/features/common/utils/price"
import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageUseMileAndGetMileContentEl from "./MyPageUseMileAndGetMileContentEl"
import MyPageListLoading from "../MyPageListLoading"
import { useGetUseMileAndGetMile } from "../../hooks/useGetUseMileAndGetMile"
import { usePagination } from "@/features/common/hooks/usePagination"

const MyPageGetMileList = () => {
  const { useMileAndGetMileInfo, isLoading } = useGetUseMileAndGetMile()

  const nonZeroGetMileList = useMileAndGetMileInfo?.filter(
    (useMileAndGetMileEl) => useMileAndGetMileEl.getMile !== 0
  )

  const perPage = 10
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    nonZeroGetMileList.length
  )

  if (isLoading) {
    return <MyPageListLoading />
  }

  if (!nonZeroGetMileList?.length)
    return <MyPageListNoneContents content="해당 마일리지 내역이 없습니다." />

  return (
    <>
      {nonZeroGetMileList?.map((useMileAndGetMileEl) => (
        <MyPageUseMileAndGetMileContentEl
          key={`useMileAndGetMileInfo-get-${useMileAndGetMileEl.checkoutNumber}`}
          checkoutDate={useMileAndGetMileEl.checkoutDate}
          checkoutNumber={useMileAndGetMileEl.checkoutNumber}
          mile={`${numberToLocaleString(useMileAndGetMileEl.getMile)} mile`}
        />
      ))}

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </>
  )
}

export default MyPageGetMileList
