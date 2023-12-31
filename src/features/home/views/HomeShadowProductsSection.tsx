import { Products } from "@/features/common/types/product"
import RenderProductList from "./RenderProductList"
import Link from "next/link"
import { ROUTE } from "@/features/common/hooks/useNavigations"

interface IHomeShadowProductsSection {
  products: Products
  sectionTitle: string
  sectionSubTitle: string
  route: ROUTE
}

const HomeShadowProductsSection = ({
  route,
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
        <Link
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/${route}`}
          className="absolute right-0 text-[14px] text-lightRed transition-3 font-bold"
        >
          + 더보기
        </Link>
      </div>

      <RenderProductList isSwiper products={products} />
    </section>
  )
}

export default HomeShadowProductsSection
