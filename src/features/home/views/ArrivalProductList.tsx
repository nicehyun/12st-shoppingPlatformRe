"use client"

import SwiperProductList from "./SwiperProductList"
import { useGetEachSectionProductList } from "../hooks/useGetEachSectionProductList"

const ArrivalProductList = () => {
  const { arrivalProductList } = useGetEachSectionProductList()

  return (
    <SwiperProductList
      productList={arrivalProductList.productList}
      isLoading={arrivalProductList.isLoading}
    />
  )
}

export default ArrivalProductList
