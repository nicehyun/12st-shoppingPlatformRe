"use client"

import Image from "next/image"
import ProductDeliveryInfo from "./ProductDeliveryInfo"
import ProductPriceInfo from "./ProductPriceInfo"
import ProductNameAndHeart from "./ProductNameAndHeart"
import { useGetProductDetailQuery } from "../hooks/useGetProductDetailQuery"
import AddProductInCartButton from "./AddProductInCartButton"
import DirectCheckoutRouteButton from "./DirectCheckoutRouteButton"

interface IProductMainInfo {
  productId: string
}

const ProductMainInfo = ({ productId }: IProductMainInfo) => {
  const { productDetail } = useGetProductDetailQuery(productId)

  if (!productDetail) return <></>

  return (
    <section className="flex md:flex-col sm:flex-col mb-[50px]">
      <div className="overflow-hidden text-[12px] text-center mr-[20px] w-1/2 md:w-full sm:w-full min-h-[300px]">
        <Image
          src={productDetail?.image ?? ""}
          alt={`상품사진이 준비되지 않았습니다. - ${productDetail?.name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-full"
          priority
        />
      </div>

      <div className="w-1/2 md:w-full sm:w-full border-t-[2px] dark:border-white sm:mt-[20px] md:mt-[20px] flex-grow">
        <ProductNameAndHeart productDetail={productDetail} />
        <ProductPriceInfo
          discount={productDetail.discount}
          price={productDetail.price}
        />

        <ProductDeliveryInfo deliveryFree={productDetail.deliveryFree} />

        <div className="mt-[20px] grid grid-cols-2 gap-[10px] h-[50px] font-bold">
          <AddProductInCartButton productDetail={productDetail} />
          <DirectCheckoutRouteButton productDetail={productDetail} />
        </div>
      </div>
    </section>
  )
}

export default ProductMainInfo
