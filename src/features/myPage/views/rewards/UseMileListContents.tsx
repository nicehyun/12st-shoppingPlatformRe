"use client"

import { numberToLocaleString } from "@/features/common/utils/price"
import MyPageListNoneContents from "../MyPageListNoneContents"
import MyPageUseMileAndGetMileContentEl from "./UseMileAndGetMileContentEl"
import { useUseMilePagination } from "../../hooks/useUseMilePagination"
import CustomPagination from "@/features/common/views/CustomPagination"
import SkeletonMileList from "./SkeletonMileList"

const UseMileListContents = () => {
  const {
    currentPage,
    handlePageChange,
    isLoading,
    paginationCount,
    renderUseMileList,
  } = useUseMilePagination()

  if (isLoading) {
    return <SkeletonMileList count={5} />
  }

  if (renderUseMileList?.length === 0)
    return <MyPageListNoneContents content="해당 마일리지 내역이 없습니다." />

  return (
    <>
      {renderUseMileList.map((useMileAndGetMileEl, index) => (
        <MyPageUseMileAndGetMileContentEl
          key={`useMileAndGetMileInfo-use-${useMileAndGetMileEl.checkoutNumber}__${index}`}
          checkoutDate={useMileAndGetMileEl.checkoutDate}
          checkoutNumber={useMileAndGetMileEl.checkoutNumber}
          mile={
            useMileAndGetMileEl.useMile === 0
              ? "0 mile"
              : `${numberToLocaleString(useMileAndGetMileEl.useMile)} mile`
          }
        />
      ))}

      <CustomPagination
        page={currentPage}
        count={paginationCount}
        onChange={handlePageChange}
        className="mt-[30px]"
      />
    </>
  )
}

export default UseMileListContents
