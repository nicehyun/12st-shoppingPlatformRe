"use client"

import ProductCard from "../common/views/ProductCard"
import { usePagination } from "../common/hooks/usePagination"
import { useGetBestProductListQuery } from "./hooks/useGetBestProductListQuery"
import Loading from "../common/views/Loading"
import { Fragment } from "react"

interface IBestProductList {
  categoriesPath: string[] | undefined
}

const BestProductList = ({ categoriesPath }: IBestProductList) => {
  const fommatedCategoriesPath = categoriesPath ?? []
  const { bestProductList, isLoading } = useGetBestProductListQuery(
    fommatedCategoriesPath
  )

  const perPage = 12
  const { listPagination, renderPaginationComponent } = usePagination(
    perPage,
    bestProductList.length
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
    <>
      <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
        {bestProductList
          .slice(listPagination.indexOfFirst, listPagination.indexOfLast)
          .map((product, index) => (
            <Fragment key={`best-product-${product.id}`}>
              <div className="relative">
                <ProductCard productInfo={product} />
                <span className="absolute top-0 left-0 bg-black w-[50px] h-[50px] flexCenter text-white text-[20px] font-bold">
                  {index + 1}
                </span>
              </div>
            </Fragment>
          ))}
      </div>

      <div className="mt-[30px]">{renderPaginationComponent()}</div>
    </>
  )
}

export default BestProductList
