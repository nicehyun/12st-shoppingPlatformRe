import { Products } from "@/features/common/types/product"
import RenderProductList from "./RenderProductList"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import SectionSuspense from "@/features/common/views/SectionSuspense"
import SectionMoreLink from "./SectionMoreLink"
import SectionTitle from "./SectionTitle"
import SectionSubTitle from "./SectionSubTitle"

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
    <section className={`py-[50px] text-black px-[50px] sm:px-0 md:px-0`}>
      <div className="relative flex items-center mb-[30px]">
        <div>
          <SectionTitle title={sectionTitle} />
          <SectionSubTitle subTitle={sectionSubTitle} />
        </div>

        <SectionMoreLink route={route} />
      </div>

      <SectionSuspense>
        <RenderProductList products={products} />
      </SectionSuspense>
    </section>
  )
}

export default HomeBasicProductsSection
