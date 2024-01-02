import RenderProductList from "./RenderProductList"
import { ROUTE } from "@/features/common/hooks/useNavigations"
import SectionSuspense from "@/features/common/views/SectionSuspense"
import SectionTitle from "./SectionTitle"
import SectionSubTitle from "./SectionSubTitle"
import SectionMoreLink from "./SectionMoreLink"

interface IHomeShadowProductsSection {
  sectionTitle: string
  sectionSubTitle: string
  route: ROUTE
}

const HomeShadowProductsSection = ({
  route,
  sectionSubTitle,
  sectionTitle,
}: IHomeShadowProductsSection) => {
  return (
    <section
      className={`py-[50px] text-black px-[50px] md:px-0 sm:px-0 border-y-[2px]`}
    >
      <div className="relative flex items-center mb-[30px]">
        <div>
          <SectionTitle title={sectionTitle} />
          <SectionSubTitle subTitle={sectionSubTitle} />
        </div>

        <SectionMoreLink route={route} />
      </div>

      <SectionSuspense>
        <RenderProductList sectionType="arrival" />
      </SectionSuspense>
    </section>
  )
}

export default HomeShadowProductsSection
