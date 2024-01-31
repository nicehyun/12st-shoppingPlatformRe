import RenderProductList from "./RenderProductList"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import SectionMoreLink from "./SectionMoreLink"
import SectionTitle from "./SectionTitle"
import SectionSubTitle from "./SectionSubTitle"
import { SectionClassification } from "../types/section"

interface IHomeBasicProductsSection {
  sectionClassification: SectionClassification
  sectionTitle: string
  sectionSubTitle: string
  route: ROUTE
}

const HomeBasicProductsSection = ({
  sectionClassification,
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

      <RenderProductList sectionClassification={sectionClassification} />
    </section>
  )
}

export default HomeBasicProductsSection
