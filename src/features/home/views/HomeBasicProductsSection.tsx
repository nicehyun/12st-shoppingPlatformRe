import { ROUTE } from "@/features/common/hooks/useNavigations"
import SectionMoreLink from "./SectionMoreLink"
import SectionTitle from "./SectionTitle"
import SectionSubTitle from "./SectionSubTitle"

import { ReactNode } from "react"

interface IHomeBasicProductsSection {
  sectionTitle: string
  sectionSubTitle: string
  route: ROUTE
  children: ReactNode
}

const HomeBasicProductsSection = ({
  children,
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

      {children}
    </section>
  )
}

export default HomeBasicProductsSection
