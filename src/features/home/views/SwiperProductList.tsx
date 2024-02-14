import "swiper/css"
import "swiper/css/scrollbar"

import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"
import { Products } from "@/features/common/types/product"
import ShadowProductCard from "./ShadowProductCard"
import SkeletonShadowProductCard from "./SkeletonShadowProductCard"

interface ISwiperProductList {
  productList: Products
  isLoading: boolean
}

const SwiperProductList = ({ productList, isLoading }: ISwiperProductList) => {
  if (isLoading) {
    return <SkeletonShadowProductCard />
  }

  return (
    <Swiper
      slidesPerView={2.4}
      grabCursor={true}
      spaceBetween={30}
      modules={[Scrollbar]}
    >
      {productList.map((product, index) => {
        return (
          <SwiperSlide key={`arrival-product-${product.id}`}>
            <ShadowProductCard productInfo={product} isPriority={index <= 2} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default SwiperProductList
