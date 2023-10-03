"use client"

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

      if (window.innerWidth < 1370) {
        setSlidesPerView(4.9)
      }

      if (window.innerWidth < 1170) {
        setSlidesPerView(3.8)
      }

      if (window.innerWidth < 880) {
        setSlidesPerView(3.5)
      }

      if (window.innerWidth < 820) {
        setSlidesPerView(3.2)
      }

      if (window.innerWidth < 767) {
        setSlidesPerView(4.2)
      }

      if (window.innerWidth < 720) {
        setSlidesPerView(3.8)
      }

      if (window.innerWidth < 680) {
        setSlidesPerView(3.4)
      }

      if (window.innerWidth < 630) {
        setSlidesPerView(3.2)
      }

      if (window.innerWidth < 580) {
        setSlidesPerView(2.8)
      }

      if (window.innerWidth < 530) {
        setSlidesPerView(2.4)
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
