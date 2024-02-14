"use client"

import HomeBasicProductList from "./HomeBasicProductList"
import { useGetEachSectionProductList } from "../hooks/useGetEachSectionProductList"

const TopSaleProductList = () => {
  const { topSaleProductList } = useGetEachSectionProductList()

  return (
    <HomeBasicProductList
      productList={topSaleProductList.productList}
      sectionClassification="sale"
      isLoading={topSaleProductList.isLoading}
    />
  )
}

export default TopSaleProductList
