"use client"

import ProductCard from "@/features/common/views/ProductCard"
import MyPageSectionTitle from "@/features/myPage/views/MyPageSectionTitle"
import { usePagination } from "@/features/common/hooks/usePagination"
import { parseCategoriesObject } from "../models/category"
import { useGetfiltedProductListQuery } from "@/features/layout/hooks/useGetfiltedProductListQuery"
import Loading from "@/features/common/views/Loading"

interface ICategoryManagement {
  categoriesPath: string
}

const CategoryManagement = ({ categoriesPath }: ICategoryManagement) => {
  const decodedCategories = decodeURIComponent(categoriesPath)

  const { firstCategory, secondCategory, thirdCategory } =
    parseCategoriesObject(decodedCategories.split(","))

  const { filtedProductList, isLoading } =
    useGetfiltedProductListQuery(decodedCategories)

  const perPage = 12
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    filtedProductList.length
  )

  if (isLoading) {
    return (
      <Loading
        spinnerSize={{ width: "w-[50px]", height: "h-[50px]" }}
        height="h-[400px]"
        isFrame={false}
      />
    )
  }

  return (
    <div>
      {/* TODO : MyPageSectionTitle common으로 수정하기 */}
      <MyPageSectionTitle
        title={`${firstCategory} > ${secondCategory} > ${thirdCategory}`}
      />

      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {filtedProductList
          .slice(listPagination.indexOfFirst, listPagination.indexOfLast)
          .map((product, index) => (
            <ProductCard
              productInfo={product}
              key={`category-${thirdCategory}-product-${index}`}
            />
          ))}
      </div>

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </div>
  )
}

export default CategoryManagement
