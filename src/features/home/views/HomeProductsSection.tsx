import { Products } from "@/common/types/product"
import Button from "@/common/views/Button"

import { ReactNode } from "react"
import HomeProductSwiper from "./HomeProductSwiper"

interface IHomeProductsSection {
  children?: ReactNode
  products: Products
  sectionTitle: string
  sectionSubTitle: string
  onMoreClick: () => void
  isBackGroundColor?: boolean
}

const HomeProductsSection = ({
  products,
  sectionTitle,
  sectionSubTitle,
  onMoreClick,
  isBackGroundColor = true,
}: IHomeProductsSection) => {
  return (
    <section
      className={`h-[800px] bg-${
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

      <HomeProductSwiper products={products} />
    </section>
  )
}

export default HomeProductsSection
