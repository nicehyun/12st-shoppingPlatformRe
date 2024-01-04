"use client"

import ProductCard from "@/features/common/views/ProductCard"
import { useGetIndiviualProductListQuery } from "@/features/home/hooks/useGetIndiviualProductListQuery"

const SaleProductList = () => {
  const { topSaleProductList } = useGetIndiviualProductListQuery()

  return (
    <div className="grid grid-cols-3 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px] mt-[50px]">
      {topSaleProductList.map((product) => (
        <ProductCard key={`sale-product-${product.id}`} productInfo={product} />
      ))}
    </div>
  )
}

export default SaleProductList
