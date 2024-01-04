"use client"

import { Product } from "@/features/common/types/product"
import ProductCard from "@/features/common/views/ProductCard"
import SwiperProductList from "./SwiperProductList"
import { useGetIndiviualProductListQuery } from "../hooks/useGetIndiviualProductListQuery"
import FourGridProductList from "../../common/views/FourGridProductList"

interface IRenderProductList {
  sectionType: "best" | "arrival" | "big_sale"
}

const RenderProductList = ({ sectionType }: IRenderProductList) => {
  const { arrivalProductList, bestProductList, topSaleProductList } =
    useGetIndiviualProductListQuery()

  if (sectionType === "best") {
    return (
      <FourGridProductList>
        {bestProductList.slice(0, 12).map((product: Product) => (
          <ProductCard
            key={`productEl-${product.id}`}
            productInfo={product}
            isPriority
          />
        ))}
      </FourGridProductList>
    )
  }

  if (sectionType === "big_sale") {
    return (
      <FourGridProductList>
        {topSaleProductList.slice(0, 12).map((product: Product) => (
          <ProductCard
            key={`productEl-${product.id}`}
            productInfo={product}
            isPriority
          />
        ))}
      </FourGridProductList>
    )
  }

  if (sectionType === "arrival") {
    return <SwiperProductList productList={arrivalProductList} />
  }
}

export default RenderProductList
