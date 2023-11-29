import { Products } from "@/features/common/types/product"
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
        slidesPerView={1.4}
      />
    </section>
  )
}

export default HomeBasicProductsSection
