"use client"

import SwiperProductList from "./SwiperProductList"
import { useGetArrivalProductListInfinityQuery } from "@/features/arrivalProductList/hooks/useGetArrivalProductListInfinityQuery"
import { useGetBestProductListWithCategoryInfiniteQuery } from "@/features/bestProductList/hooks/useGetBestProductListWithCategoryInfiniteQuery"
import { useGetTopSaleProductListInfinityQuery } from "@/features/topSaleProductList/hooks/useGetTopSaleProductListInfinityQuery"
import HomeBasicProductList from "./HomeBasicProductList"
import { SectionClassification } from "../types/section"

interface IRenderProductList {
  sectionClassification: SectionClassification
}

const RenderProductList = ({ sectionClassification }: IRenderProductList) => {
  const { arrivalProductList, isLoading: isGetArrivalProductListLoading } =
    useGetArrivalProductListInfinityQuery()

  const { bestProductList, isLoading: isGetBestProductListLoading } =
    useGetBestProductListWithCategoryInfiniteQuery()

  const { topSaleProductList, isLoading: isGetTopSaleProductListLoading } =
    useGetTopSaleProductListInfinityQuery()

  if (sectionClassification === "BEST") {
    return (
      <HomeBasicProductList
        isLoading={isGetArrivalProductListLoading}
        productList={bestProductList}
        sectionClassification="best"
      />
    )
  }

  if (sectionClassification === "SALE") {
    return (
      <HomeBasicProductList
        isLoading={isGetTopSaleProductListLoading}
        productList={topSaleProductList}
        sectionClassification="sale"
      />
    )
  }

  if (sectionClassification === "ARRIVAL") {
    return (
      <SwiperProductList
        productList={arrivalProductList}
        isLoading={isGetBestProductListLoading}
      />
    )
  }
}

export default RenderProductList
