import { Products } from "@/features/common/types/product"
import RenderProductList from "./RenderProductList"
import Link from "next/link"
import { ROUTE } from "@/features/common/hooks/useNavigations"

interface IHomeBasicProductsSection {
  products: Products
  sectionTitle: string
  sectionSubTitle: string
  route: ROUTE
}

const HomeBasicProductsSection = ({
  products,
  sectionTitle,
  sectionSubTitle,
  route,
}: IHomeBasicProductsSection) => {
  return (
    <section
      className={`bg-white py-[50px] text-black px-[50px] sm:px-0 md:px-0`}
    >
      <div className="relative flex items-center mb-[30px]">
        <div>
          <h3 className="font-bold text-[22px] xl:text-[28px]">
            {sectionTitle}
          </h3>
          <p className="text-[12px] xl:text-[14px]">{sectionSubTitle}</p>
        </div>

        <Link
          href={`${route}`}
          className="absolute right-0 text-[14px] text-lightRed transition-3 font-bold"
        >
          + 더보기
        </Link>
      </div>

      <RenderProductList products={products} />
    </section>
  )
}

export default HomeBasicProductsSection
