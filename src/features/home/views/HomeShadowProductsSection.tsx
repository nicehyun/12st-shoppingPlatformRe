import { Products } from "@/features/common/types/product"
import RenderProductList from "./RenderProductList"

interface IHomeShadowProductsSection {
  products: Products
  sectionTitle: string
  sectionSubTitle: string
  onMoreClick: () => void
}

const HomeShadowProductsSection = ({
  onMoreClick,
  products,
  sectionSubTitle,
  sectionTitle,
}: IHomeShadowProductsSection) => {
  return (
    <section
      className={`bg-white py-[50px] text-black px-[50px] md:px-0 sm:px-0 border-y-[2px]`}
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

      <RenderProductList isSwiper products={products ?? []} />
    </section>
  )
}

export default HomeShadowProductsSection
