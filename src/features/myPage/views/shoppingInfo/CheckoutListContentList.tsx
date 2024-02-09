"use client"

import MyPageListNoneContents from "../MyPageListNoneContents"
import CustomPagination from "@/features/common/views/CustomPagination"
import { useCheckoutPagination } from "../../hooks/useCheckoutPagination"
import CheckoutListTableContent from "./CheckoutListTableContent"
import SkeletonCheckoutList from "./SkeletonCheckoutList"

const CheckoutListContentList = () => {
  const {
    currentPage,
    handlePageChange,
    isLoading,
    paginationCount,
    renderCheckoutList,
  } = useCheckoutPagination()

  if (isLoading) {
    return <SkeletonCheckoutList />
  }

  if (renderCheckoutList.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <>
      <ul>
        {renderCheckoutList.map((checkoutListEl, index) => (
          <CheckoutListTableContent
            checkoutList={checkoutListEl}
            key={`checkoutList-${checkoutListEl?.checkoutNumber}-${index}`}
          />
        ))}
      </ul>

      <CustomPagination
        page={currentPage}
        count={paginationCount}
        onChange={handlePageChange}
        className="mt-[30px]"
      />
    </>
  )
}

export default CheckoutListContentList
