"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"
import { Product, Products } from "@/features/common/types/product"
import ArrivalProductCard from "./ShadowProductCard"
import ProductCard from "@/features/common/views/ProductCard"

import "swiper/css"
import "swiper/css/scrollbar"
import { useEffect, useState } from "react"

interface IProductSwiper {
  products: Products
  isSwiper?: boolean
}

const RenderProductList = ({ products, isSwiper = false }: IProductSwiper) => {
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

  const renderSwiperProductList = () => {
    return (
      <Swiper
        slidesPerView={slidesPerView}
        grabCursor={true}
        spaceBetween={30}
        modules={[Scrollbar]}
      >
        {products?.map((product: Product) => (
          <SwiperSlide
            key={`ProductEl-${product.id}`}
            className="swiper-slide flex"
          >
            <ArrivalProductCard productInfo={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }

  if (isSwiper) {
    return renderSwiperProductList()
  }

  return (
    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-[20px]">
      {products.map((product: Product) => (
        <ProductCard key={`productEl-${product.id}`} productInfo={product} />
      ))}
    </div>
  )
}

export default RenderProductList
