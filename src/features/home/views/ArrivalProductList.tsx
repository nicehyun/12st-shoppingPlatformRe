"use client"

import dynamic from "next/dynamic"
import SkeletonShadowProductCard from "./SkeletonShadowProductCard"
import { useGetArrivalProductListInfinityQuery } from "@/features/arrivalProductList/hooks/useGetArrivalProductListInfinityQuery"

const DynamicSwiperProductList = dynamic(() => import("./SwiperProductList"), {
  loading: () => <SkeletonShadowProductCard />,
})

const ArrivalProductList = () => {
  const { arrivalProductList, isLoading } =
    useGetArrivalProductListInfinityQuery()

  return (
    <DynamicSwiperProductList
      productList={arrivalProductList}
      isLoading={isLoading}
    />
  )
}

export default ArrivalProductList
