import { InfiniteData } from "@tanstack/react-query"
import { InfinityProductResponse } from "../types/product"
import SkeletonProductList from "./SkeletonProductList"
import FourGridProductList from "./FourGridProductList"
import { RefObject } from "react"
import ProductCard from "./ProductCard"

interface IInfiniteScrollProductList {
  isLoading: boolean
  isLoadMoreFetching: boolean | undefined
  productList: InfiniteData<InfinityProductResponse> | undefined
  loadMoreRef: RefObject<HTMLDivElement>
  sectionClassification: string
}

const InfiniteScrollProductList = ({
  isLoading,
  isLoadMoreFetching,
  productList,
  loadMoreRef,
  sectionClassification,
}: IInfiniteScrollProductList) => {
  if (isLoading) {
    return <SkeletonProductList className="mt-[50px]" />
  }

  return (
    <>
      <FourGridProductList className="mt-[50px]">
        {productList?.pages.flatMap((group) =>
          group.productList.map((product) => {
            return (
              <ProductCard
                key={`${sectionClassification}-product-${product.id}`}
                productInfo={product}
              />
            )
          })
        )}

        <div ref={loadMoreRef} />
      </FourGridProductList>

      {isLoadMoreFetching && <SkeletonProductList />}
    </>
  )
}

export default InfiniteScrollProductList
