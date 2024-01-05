"use client"

import { usePagination } from "@/features/common/hooks/usePagination"
import ProductCard from "@/features/common/views/ProductCard"
import { useGetFiltedProductListWithCategoryQuery } from "@/features/layout/hooks/useGetFiltedProductListWithCategoryQuery"

interface IFiltedProcutList {
  categoriesPath: string[]
}

const FiltedProcutList = ({ categoriesPath }: IFiltedProcutList) => {
  const { filtedProductList } =
    useGetFiltedProductListWithCategoryQuery(categoriesPath)

  const perPage = 48
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    filtedProductList.length
  )
  return (
    <>
      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {filtedProductList
          ?.slice(listPagination.indexOfFirst, listPagination.indexOfLast)
          .map((product, index) => (
            <ProductCard
              productInfo={product}
              key={`product-categogy-${product.id}`}
              isPriority={index < 48}
            />
          ))}
      </div>

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </>
  )
}

export default FiltedProcutList
