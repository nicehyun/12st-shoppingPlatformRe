"use client"

import ProductCard from "@/features/common/views/ProductCard"
import MyPageListNoneContents from "../MyPageListNoneContents"
import { useHeartProductPagination } from "../../hooks/useHeartProductPagination"
import CustomPagination from "@/features/common/views/CustomPagination"
import SkeletonHeartProductList from "./SkeletonHeartProductList"

const HeartProductList = () => {
  const {
    currentPage,
    handlePageChange,
    isLoading,
    paginationCount,
    renderHeartProductList,
  } = useHeartProductPagination()

  if (isLoading) {
    return <SkeletonHeartProductList />
  }

  if (renderHeartProductList.length === 0) {
    return <MyPageListNoneContents content="좋아요를 누른 상품이 없습니다" />
  }

  return (
    <>
      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {renderHeartProductList.map((product) => (
          <ProductCard
            productInfo={product}
            key={`heart-product-${product.id}`}
          />
        ))}
      </div>

      <CustomPagination
        page={currentPage}
        count={paginationCount}
        onChange={handlePageChange}
        className="mt-[30px]"
      />
    </>
  )
}

export default HeartProductList
