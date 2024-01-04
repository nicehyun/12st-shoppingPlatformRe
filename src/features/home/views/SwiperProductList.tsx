import "swiper/css"
import "swiper/css/scrollbar"

import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"
import { Products } from "@/features/common/types/product"
import ShadowProductCard from "./ShadowProductCard"

interface ISwiperProductList {
  productList: Products
}

const SwiperProductList = ({ productList }: ISwiperProductList) => {
  return (
    <Swiper
      slidesPerView={2.4}
      grabCursor={true}
      spaceBetween={30}
      modules={[Scrollbar]}
    >
      {productList.slice(0, 12).map((product, index) => (
        <SwiperSlide key={`ProductEl-${product.id}`}>
          <ShadowProductCard productInfo={product} isPriority={index <= 2} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperProductList
