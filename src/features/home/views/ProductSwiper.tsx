"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Scrollbar } from "swiper/modules"
import { Product, Products } from "@/features/common/types/product"
import ArrivalProductCard from "./ShadowProductCard"
import ProductCard from "@/features/common/views/ProductCard"

import "swiper/css"
import "swiper/css/scrollbar"

interface IProductSwiper {
  slidesPerView: number
  products: Products
  productCardkind: "basic" | "shadow"
}

const ProductSwiper = ({
  slidesPerView,
  products,
  productCardkind,
}: IProductSwiper) => {
  const renderProducts = () => {
    if (productCardkind === "basic") {
      return products.map((product: Product) => (
        <SwiperSlide key={`productEl-${product.id}`} className="swiper-slide">
          <ProductCard productInfo={product} />
        </SwiperSlide>
      ))
    }

    if (productCardkind === "shadow") {
      return products?.map((product: Product) => (
        <SwiperSlide
          key={`ProductEl-${product.id}`}
          className="swiper-slide flex"
        >
          <ArrivalProductCard productInfo={product} />
        </SwiperSlide>
      ))
    }
  }
  return (
    <Swiper
      slidesPerView={slidesPerView}
      grabCursor={true}
      spaceBetween={30}
      modules={[Scrollbar]}
    >
      {renderProducts()}
    </Swiper>
  )
}

export default ProductSwiper
