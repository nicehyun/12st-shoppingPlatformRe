"use client"

import ProductCard from "@/features/common/views/ProductCard"
import MyPageListNoneContents from "../MyPageListNoneContents"
import { usePagination } from "@/features/common/hooks/usePagination"
import { useGetHeartListQuery } from "@/features/productDetail/hooks/useGetHeartListQuery"
import MyPageListLoading from "../MyPageListLoading"
import { useNavigations } from "@/features/common/hooks/useNavigations"

const HeartProductList = () => {
  const { pathname } = useNavigations()
  const { heartList, isLoading: isGetHeartListLoading } = useGetHeartListQuery()

  const perPage = pathname === "/myPage" ? 6 : 12
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    heartList.length
  )

  if (isGetHeartListLoading) {
    return <MyPageListLoading />
  }

  if (heartList.length === 0) {
    return <MyPageListNoneContents content="좋아요를 누른 상품이 없습니다" />
  }

  return (
    <>
      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {heartList
          .slice(listPagination.indexOfFirst, listPagination.indexOfLast)
          .map((product, index) => (
            <ProductCard
              productInfo={product}
              key={`heart-product-${product.id}`}
            />
          ))}
      </div>

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </>
  )
}

export default HeartProductList
