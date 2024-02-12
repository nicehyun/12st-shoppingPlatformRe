import { ROUTE } from "@/features/common/hooks/useNavigations"
import SectionTitle from "./SectionTitle"
import SectionSubTitle from "./SectionSubTitle"
import SectionMoreLink from "./SectionMoreLink"

import { ReactNode } from "react"

interface IHomeShadowProductsSection {
  sectionTitle: string
  sectionSubTitle: string
  route: ROUTE
  children: ReactNode
}

const HomeShadowProductsSection = ({
  route,
  sectionSubTitle,
  sectionTitle,
  children,
}: IHomeShadowProductsSection) => {
  return (
    <section
      className={`py-[50px] min-h-[476px] text-black lg:px-[50px] xl:px-[50px] md:px-0 sm:px-0 border-y-[2px] dark:border-white`}
    >
      <div className="relative flex items-center mb-[30px]">
        <div>
          <SectionTitle title={sectionTitle} />
          <SectionSubTitle subTitle={sectionSubTitle} />
        </div>

        <SectionMoreLink route={route} />
      </div>

      {children}
    </section>
  )
}

export default HomeShadowProductsSection
