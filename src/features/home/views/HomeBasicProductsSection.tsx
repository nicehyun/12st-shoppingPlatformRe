"use client"

import { Products } from "@/common/types/product"
import Button from "@/common/views/Button"

import { useEffect, useState } from "react"
import ProductSwiper from "./ProductSwiper"

interface IHomeBasicProductsSection {
  products: Products
  sectionTitle: string
  sectionSubTitle: string
  onMoreClick: () => void
  isBackGroundColor?: boolean
}

const HomeBasicProductsSection = ({
  products,
  sectionTitle,
  sectionSubTitle,
  onMoreClick,
  isBackGroundColor = true,
}: IHomeBasicProductsSection) => {
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
    <section
      className={` bg-${
        isBackGroundColor ? "lightBorder" : "white"
      } py-[50px] text-black px-[50px]`}
    >
      <div className="relative flex items-center mb-[30px]">
        <div>
          <h3 className="font-bold text-[22px] xl:text-[28px]">
            {sectionTitle}
          </h3>
          <p className="text-[12px] xl:text-[14px]">{sectionSubTitle}</p>
        </div>

        {/* <Button
          onClick={() => {
            console.log(123)
          }}
          content="+ 더보기"
          classNames="absolute right-0 text-[12px] hover:text-lightRed transition-3"
        /> */}
      </div>

      <ProductSwiper
        productCardkind="basic"
        products={products ?? []}
        slidesPerView={slidesPerView}
      />
    </section>
  )
}

export default HomeBasicProductsSection
