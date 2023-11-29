"use client"
import { Products } from "@/features/common/types/product"
import { useEffect, useState } from "react"
import ProductSwiper from "./ProductSwiper"

interface IHomeShadowProductsSection {
  products: Products
  sectionTitle: string
  sectionSubTitle: string
  onMoreClick: () => void
  isBackGroundColor?: boolean
}

const HomeShadowProductsSection = ({
  onMoreClick,
  products,
  sectionSubTitle,
  sectionTitle,

  isBackGroundColor,
}: IHomeShadowProductsSection) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(1.4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(3.2)
      }

      if (window.innerWidth < 1000) {
        setSlidesPerView(2.8)
      }

      if (window.innerWidth < 800) {
        setSlidesPerView(2.4)
      }

      if (window.innerWidth < 600) {
        setSlidesPerView(1.8)
      }

      if (window.innerWidth < 600) {
        setSlidesPerView(1.2)
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
        productCardkind="shadow"
        products={products ?? []}
        slidesPerView={slidesPerView}
      />
    </section>
  )
}

export default HomeShadowProductsSection
