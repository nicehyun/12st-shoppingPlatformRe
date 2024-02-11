"use client"

import { numberToLocaleString } from "@/features/common/utils/price"
import MyPageListNoneContents from "../MyPageListNoneContents"
import UseMileAndGetMileContentEl from "./UseMileAndGetMileContentEl"
import SkeletonMileList from "./SkeletonMileList"
import { useGetMilePagination } from "../../hooks/useGetMilePagination"
import CustomPagination from "@/features/common/views/CustomPagination"

const GetMileListContents = () => {
  const {
    currentPage,
    handlePageChange,
    isLoading,
    paginationCount,
    renderGetMileList,
  } = useGetMilePagination()

  if (isLoading) {
    return <SkeletonMileList count={5} />
  }

  if (renderGetMileList?.length === 0)
    return <MyPageListNoneContents content="해당 마일리지 내역이 없습니다." />

  return (
    <>
      {renderGetMileList.map((useMileAndGetMileEl, index) => (
        <UseMileAndGetMileContentEl
          key={`useMileAndGetMileInfo-get-${useMileAndGetMileEl.checkoutNumber}__${index}`}
          checkoutDate={useMileAndGetMileEl.checkoutDate}
          checkoutNumber={useMileAndGetMileEl.checkoutNumber}
          mile={
            useMileAndGetMileEl.getMile === 0
              ? "0 mile"
              : `${numberToLocaleString(useMileAndGetMileEl.getMile)} mile`
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

export default GetMileListContents
