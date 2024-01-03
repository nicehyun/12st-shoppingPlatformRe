import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"
import { Products } from "@/features/common/types/product"
import ShadowProductCard from "./ShadowProductCard"

import "swiper/css"
import "swiper/css/scrollbar"

interface ISwiperProductList {
  productList: Products
}

const SwiperProductList = ({ productList }: ISwiperProductList) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(3.2)
      }

      if (window.innerWidth < 1000) {
        setSlidesPerView(2.8)
      }

      if (window.innerWidth < 800) {
        setSlidesPerView(1.2)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <Swiper
      slidesPerView={slidesPerView}
      grabCursor={true}
      spaceBetween={30}
      modules={[Scrollbar]}
    >
      {productList.slice(0, 12).map((product) => (
        <SwiperSlide
          key={`ProductEl-${product.id}`}
          className="swiper-slide flex"
        >
          <ShadowProductCard productInfo={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SwiperProductList
