import { useEffect, useState } from "react"

import { Product, Products } from "@/common/types/product"
import ProductCard from "@/common/views/ProductCard"

import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"

import "swiper/css"
import "swiper/css/scrollbar"

interface IHomeProductSwiper {
  products: Products
}
const HomeProductSwiper = ({ products }: IHomeProductSwiper) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(3.8)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1660) {
        setSlidesPerView(6.8)
      }

      if (window.innerWidth < 1560) {
        setSlidesPerView(5.8)
      }

      if (window.innerWidth < 1300) {
        setSlidesPerView(4.9)
      }

      if (window.innerWidth < 1100) {
        setSlidesPerView(4.3)
      }

      if (window.innerWidth < 850) {
        setSlidesPerView(3.5)
      }

      if (window.innerWidth < 767) {
        setSlidesPerView(4.2)
      }

      if (window.innerWidth < 640) {
        setSlidesPerView(3.5)
      }

      if (window.innerWidth < 530) {
        setSlidesPerView(3.2)
      }

      if (window.innerWidth <= 479) {
        setSlidesPerView(3.2)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <Swiper
      slidesPerView={slidesPerView ?? "auto"}
      spaceBetween={30}
      modules={[Scrollbar]}
    >
      {products.map((product: Product) => (
        <SwiperSlide key={`productEl-${product.id}`} className="swiper-slide">
          <ProductCard productInfo={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default HomeProductSwiper
