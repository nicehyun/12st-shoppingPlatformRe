"use client"

import { useGetBestProductListWithCategoryInfiniteQuery } from "@/features/bestProductList/hooks/useGetBestProductListWithCategoryInfiniteQuery"
import dynamic from "next/dynamic"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"

const DynamicProductList = dynamic(() => import("./HomeBasicProductList"), {
  loading: () => <SkeletonProductList className="mt-[50px]" />,
})

const BestProductList = () => {
  const { bestProductList, isLoading } =
    useGetBestProductListWithCategoryInfiniteQuery()

  return (
    <DynamicProductList
      productList={bestProductList}
      sectionClassification="best"
      isLoading={isLoading}
    />
  )
}

export default BestProductList
