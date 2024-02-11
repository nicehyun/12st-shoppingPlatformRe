"use client"

import MyPageListNoneContents from "../MyPageListNoneContents"
import { useGetProductQnAListPagination } from "../../hooks/useGetProductQnAListPagination"
import CustomPagination from "@/features/common/views/CustomPagination"
import ProductQnAContent from "./ProductQnAContent"
import SkeletonInquiryCustomerCounselingContentList from "../customerService/SkeletonInquiryCustomerCounselingContentList"

const ProductQnAContentList = () => {
  const {
    currentPage,
    handlePageChange,
    isLoading,
    paginationCount,
    renderProductQnAList,
  } = useGetProductQnAListPagination()

  if (isLoading) {
    return <SkeletonInquiryCustomerCounselingContentList />
  }

  if (renderProductQnAList?.length === 0) {
    return <MyPageListNoneContents />
  }

  return (
    <>
      {renderProductQnAList.map((productQnAEl, index) => (
        <ProductQnAContent
          productQnA={productQnAEl}
          key={`customerCounselingList-${productQnAEl.csType}-${productQnAEl.writeDate}-${index}`}
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

export default ProductQnAContentList
