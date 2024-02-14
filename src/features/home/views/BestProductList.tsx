"use client"

import HomeBasicProductList from "./HomeBasicProductList"
import { useGetEachSectionProductList } from "../hooks/useGetEachSectionProductList"

const BestProductList = () => {
  const { bestProductList } = useGetEachSectionProductList()

  return (
    <HomeBasicProductList
      productList={bestProductList.productList}
      sectionClassification="best"
      isLoading={bestProductList.isLoading}
    />
  )
}

export default BestProductList
