"use client"

import { useGetProductInfoQuery } from "@/features/productInfo/hooks/useGetProductInfoQuery"

type PageParams = {
  productId: string
  email: string
}

const ProductInfoPage = ({ params }: { params: PageParams }) => {
  const { productInfo } = useGetProductInfoQuery(params.productId)

  console.log(productInfo)

  return (
    <div className="h-[500px]">
      <h1>상품 상세 페이지</h1>

      <p>{params.productId}</p>
    </div>
  )
}

export default ProductInfoPage
