import RenderProductList from "./RenderProductList"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import SectionMoreLink from "./SectionMoreLink"
import SectionTitle from "./SectionTitle"
import SectionSubTitle from "./SectionSubTitle"

interface IHomeBasicProductsSection {
  sectionType: "best" | "big_sale"
  sectionTitle: string
  sectionSubTitle: string
  route: ROUTE
}

const HomeBasicProductsSection = ({
  sectionType,
  sectionTitle,
  sectionSubTitle,
  route,
}: IHomeBasicProductsSection) => {
  return (
    <section
      className={`py-[50px] text-black xl:px-[50px] lg:px-[50px] sm:px-0 md:px-0`}
    >
      <div className="relative flex items-center mb-[30px]">
        <div>
          <SectionTitle title={sectionTitle} />
          <SectionSubTitle subTitle={sectionSubTitle} />
        </div>

        <SectionMoreLink route={route} />
      </div>

      <RenderProductList sectionType={sectionType} />
    </section>
  )
}

export default HomeBasicProductsSection
