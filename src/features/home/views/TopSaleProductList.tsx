"use client"

import { useGetTopSaleProductListInfinityQuery } from "@/features/topSaleProductList/hooks/useGetTopSaleProductListInfinityQuery"
import dynamic from "next/dynamic"
import SkeletonProductList from "@/features/common/views/SkeletonProductList"

const DynamicProductList = dynamic(() => import("./HomeBasicProductList"), {
  loading: () => <SkeletonProductList className="mt-[50px]" />,
})

const TopSaleProductList = () => {
  const { topSaleProductList, isLoading } =
    useGetTopSaleProductListInfinityQuery()

  return (
    <DynamicProductList
      productList={topSaleProductList}
      sectionClassification="sale"
      isLoading={isLoading}
    />
  )
}

export default TopSaleProductList
