"use client"

import FourGridProductList from "@/features/common/views/FourGridProductList"
import ProductCard from "@/features/common/views/ProductCard"
import { useGetIndiviualProductListQuery } from "@/features/home/hooks/useGetIndiviualProductListQuery"

const ArrivalProductList = () => {
  const { arrivalProductList } = useGetIndiviualProductListQuery()
  return (
    <FourGridProductList className="mt-[50px]">
      {arrivalProductList.map((product, index) => (
        <ProductCard
          key={`new-product-${product.id}`}
          productInfo={product}
          label={"NEW"}
          isPriority
        />
      ))}
    </FourGridProductList>
  )
}

export default ArrivalProductList
